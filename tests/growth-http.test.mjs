import {spawn} from 'node:child_process';
import {once} from 'node:events';
import assert from 'node:assert/strict';
import test from 'node:test';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
test('production public guides, sitemap and private index controls',async()=>{
  const port=process.env.GROWTH_TEST_PORT||'3110';
  const server=spawn(process.execPath,['node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port',port],{cwd:root,env:{...process.env,STRIPE_SECRET_KEY:process.env.STRIPE_SECRET_KEY||'sk_test_ci_placeholder'},stdio:['ignore','pipe','pipe']});
  const origin='http://127.0.0.1:'+port;
  try {
    await new Promise((resolve,reject)=>{let log='';const timer=setTimeout(()=>reject(Error('Server readiness timeout: '+log)),20000);server.stdout.on('data',chunk=>{log+=chunk;if(log.includes('Ready')){clearTimeout(timer);resolve();}});server.stderr.on('data',chunk=>{log+=chunk});server.once('exit',code=>{clearTimeout(timer);reject(Error('Server exited '+code+': '+log))});});
    for(const route of ['/business','/business/search-and-ai','/business/sell-online','/business/food-and-grocery','/trust']){
      const response=await fetch(origin+route);const html=await response.text();assert.equal(response.status,200,route);assert.ok(html.includes('rel="canonical" href="https://fahampesa.com'+route+'"'));assert.match(html,/id="growth-main"/);assert.ok(!html.includes('chatwoot.com'));if(route.endsWith('search-and-ai'))assert.match(html,/id="prompt-name"/);
    }
    for(const route of ['/apps','/apps/seller','/apps/shopper','/business/get-started','/business/property-management','/business/sellers','/business/reports','/guides','/guides/rent-payments-and-deposits','/pos-system-kenya','/inventory-management-software-kenya','/industries/retail-pos-kenya','/contact-information','/about','/privacy','/terms','/account-deletion']){
      const response=await fetch(origin+route);const html=await response.text();assert.equal(response.status,200,route);assert.doesNotMatch(html,/subscription/i,route);assert.match(html,/fp-header/,route);assert.match(html,/fp-footer/,route);
      for(const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g))assert.doesNotThrow(()=>JSON.parse(match[1]),route);
    }
    for(const route of ['/pricingpage','/pricing','/subscription']){const res=await fetch(origin+route,{redirect:'manual'});assert.equal(res.status,308,route);assert.equal(res.headers.get('location'),'/business/get-started');}
    assert.equal((await fetch(origin+'/assets/fonts/inter-latin.woff2')).status,200);
    for(const [route,id] of [['seller','com.fahampesa.seller'],['shopper','com.fahampesa.app']]){const res=await fetch(origin+'/apps/'+route);const html=await res.text();assert.match(html,new RegExp('play.google.com/store/apps/details\\?id='+id.replaceAll('.','\\.')));assert.ok(html.includes('rel="canonical" href="https://fahampesa.com/apps/'+route+'"'));assert.ok(!html.includes('chatwoot.com'));assert.equal(res.headers.get('x-robots-tag'),null);}
    const sitemap=await(await fetch(origin+'/sitemap.xml')).text();assert.ok(sitemap.includes('<loc>https://fahampesa.com/business/food-and-grocery</loc>'));assert.ok(sitemap.includes('/business/get-started'));assert.ok(sitemap.includes('/apps/seller'));assert.ok(sitemap.includes('/apps/shopper'));assert.ok(!sitemap.includes('/pricingpage'));assert.ok(sitemap.includes('/guides/rent-payments-and-deposits'));
    for(const old of ['/business/guides','/business/guides/rent-payments-and-deposits']){const res=await fetch(origin+old,{redirect:'manual'});assert.equal(res.status,308);assert.equal(res.headers.get('location'),old.replace('/business/guides','/guides'));}
    const guide=await(await fetch(origin+'/guides/rent-payments-and-deposits')).text();assert.ok(guide.includes('rel="canonical" href="https://fahampesa.com/guides/rent-payments-and-deposits"'));
    const contact=await(await fetch(origin+'/contact-information')).text();assert.match(contact,/Meet the team/);assert.match(contact,/Nairobi time/);assert.match(contact,/LocalBusiness/);assert.match(contact,/openingHoursSpecification/);
    const robots=await(await fetch(origin+'/robots.txt')).text();assert.match(robots,/catalog-sitemap.xml/);
    const catalog=await fetch(origin+'/catalog-sitemap.xml');assert.equal(catalog.status,503,'unconfigured catalog must not serve an empty successful sitemap');assert.equal(catalog.headers.get('cache-control'),'no-store');
    const privatePage=await fetch(origin+'/staff-dashboard',{redirect:'manual'});assert.equal(privatePage.headers.get('x-robots-tag'),'noindex, nofollow');
    const login=await fetch(origin+'/login',{redirect:'manual'});assert.equal(login.status,307);assert.equal(login.headers.get('location'),'https://app.fahampesa.com/?intent=login');
    const homepage=await(await fetch(origin+'/')).text();assert.match(homepage,/Business Growth/);assert.match(homepage,/Property management/);assert.doesNotMatch(homepage,/subscription|KSh 2,000/i);assert.ok(!homepage.includes('Works online and offline'));
    assert.match(homepage,/<title>FahamPesa \| Business Tools, Property &amp; Online Selling<\/title>/);
    assert.match(homepage,/name="description" content="Manage sales, stock and rental properties\./);
    assert.match(homepage,/property="og:site_name" content="FahamPesa"/);
    assert.match(homepage,/property="og:image" content="https:\/\/fahampesa.com\/brand-preview"/);
    assert.match(homepage,/sizes="192x192"[^>]*href="\/assets\/brand\/fahampesa-logo-192.png"|href="\/assets\/brand\/fahampesa-logo-192.png"[^>]*sizes="192x192"/);
    const graph=[...homepage.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].flatMap(match=>JSON.parse(match[1])['@graph']||[]);
    assert.equal(graph.find(entity=>entity['@type']==='WebSite').name,'FahamPesa');
    assert.equal(graph.find(entity=>entity['@type']==='WebSite').alternateName,'Fahampesa');
    assert.equal(graph.find(entity=>entity['@type']==='Organization').name,'FahamPesa');
    assert.match(homepage,/class="fp-container fp-tour-wrap" data-nosnippet="true"/);
    const brand=await fetch(origin+'/brand-preview');assert.equal(brand.status,200);assert.match(brand.headers.get('content-type'),/image\/png/);const bytes=Buffer.from(await brand.arrayBuffer());assert.equal(bytes.readUInt32BE(16),1200);assert.equal(bytes.readUInt32BE(20),630);
  } finally {server.kill('SIGTERM');if(server.exitCode===null)await once(server,'exit');}
});
