export type RentalExample={rentDue:number;rentReceived:number;depositRequired:number;depositReceived:number};
export function rentalExample(values:RentalExample){
 for(const value of Object.values(values))if(!Number.isSafeInteger(value)||value<0||value>100_000_000_000)throw Error('Use a valid non-negative amount.');
 return {rentBalance:Math.max(0,values.rentDue-values.rentReceived),rentCredit:Math.max(0,values.rentReceived-values.rentDue),depositShortfall:Math.max(0,values.depositRequired-values.depositReceived),depositExcess:Math.max(0,values.depositReceived-values.depositRequired)};
}
