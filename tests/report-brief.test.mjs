import test from 'node:test';
import assert from 'node:assert/strict';
import {parseReportAmount,summarizeReport} from '../src/lib/report-brief.ts';
test('money parsing preserves cents and rejects malformed or oversized amounts',()=>{
 assert.equal(parseReportAmount(' 125.50 '),12550);assert.equal(parseReportAmount('0'),0);assert.equal(parseReportAmount('1000000000'),100000000000);
 for(const value of ['-1','1.234','1e5','NaN','','1,000','1000000000.01'])assert.throws(()=>parseReportAmount(value));
});
test('report separates gross and operating amounts with a precise comparison',()=>{
 const r=summarizeReport({sales:8400000,previousSales:7200000,costOfGoods:4800000,expenses:1800000});
 assert.equal(r.change,16.7);assert.equal(r.gross,3600000);assert.equal(r.operating,1800000);assert.match(r.prompt,/not call this final net profit/);assert.match(r.prompt,/Do not invent/);
});
test('zero previous sales avoids infinite growth, and losses remain visible',()=>{
 const r=summarizeReport({sales:50000,previousSales:0,costOfGoods:60000,expenses:10000});assert.equal(r.change,null);assert.equal(r.gross,-10000);assert.equal(r.operating,-20000);
 assert.match(r.observations[0],/previous-period sales were zero/);
});
test('unchanged sales and invalid programmatic totals are handled',()=>{
 const totals={sales:100,previousSales:100,costOfGoods:0,expenses:0};assert.equal(summarizeReport(totals).change,0);assert.match(summarizeReport(totals).observations[0],/unchanged/);
 for(const value of [-1,NaN,Infinity,1.5,100000000001])assert.throws(()=>summarizeReport({...totals,sales:value}));
});
