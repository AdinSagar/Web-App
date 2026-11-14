// Raster exports share the approved vector geometry. Run from repository root.
import sharp from 'sharp';
import {readFile,writeFile} from 'node:fs/promises';
const source=await readFile('public/assets/brand/fahampesa-f.svg');
for(const size of [180,192,512]) {
 const png=await sharp(source).resize(size,size).flatten({background:'#ffffff'}).png().toBuffer();
 await writeFile(`public/assets/brand/fahampesa-f-${size}.png`,png);
 // Compatibility for older components and cached links.
 await writeFile(`public/assets/brand/fahampesa-logo-${size}.png`,png);
}
await writeFile('public/assets/figma/landing/logo-icon.svg',source);
const sizes=[16,32,48];
const images=await Promise.all(sizes.map(size=>sharp(source).resize(size,size).flatten({background:'#ffffff'}).png().toBuffer()));
const header=Buffer.alloc(6+16*sizes.length);header.writeUInt16LE(1,2);header.writeUInt16LE(sizes.length,4);
let offset=header.length;
images.forEach((png,i)=>{const p=6+16*i;header[p]=sizes[i];header[p+1]=sizes[i];header.writeUInt16LE(1,p+4);header.writeUInt16LE(32,p+6);header.writeUInt32LE(png.length,p+8);header.writeUInt32LE(offset,p+12);offset+=png.length;});
const ico=Buffer.concat([header,...images]);
await writeFile('public/favicon.ico',ico);
await writeFile('public/assets/brand/fahampesa-f.ico',ico);
