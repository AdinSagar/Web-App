import test from 'node:test';
import assert from 'node:assert/strict';
import {rentalExample} from '../src/lib/property-example.ts';
const base={rentDue:1500000,rentReceived:1000000,depositRequired:3000000,depositReceived:2000000};
test('partial rent and deposit balances stay separate',()=>assert.deepEqual(rentalExample(base),{rentBalance:500000,rentCredit:0,depositShortfall:1000000,depositExcess:0}));
test('overpayment creates rent credit without changing the deposit',()=>assert.deepEqual(rentalExample({...base,rentReceived:1800000}),{rentBalance:0,rentCredit:300000,depositShortfall:1000000,depositExcess:0}));
test('deposit excess never becomes rent credit',()=>assert.deepEqual(rentalExample({...base,depositReceived:3500000}),{rentBalance:500000,rentCredit:0,depositShortfall:0,depositExcess:500000}));
test('exact payments and zero are valid',()=>assert.deepEqual(rentalExample({rentDue:100,rentReceived:100,depositRequired:0,depositReceived:0}),{rentBalance:0,rentCredit:0,depositShortfall:0,depositExcess:0}));
test('rejects negative, fractional, nonfinite and out of range minor units',()=>{for(const rentReceived of [-1,1.5,NaN,Infinity,100000000001])assert.throws(()=>rentalExample({...base,rentReceived}));});
