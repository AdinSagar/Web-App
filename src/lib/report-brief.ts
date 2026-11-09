export type ReportTotals={sales:number;previousSales:number;costOfGoods:number;expenses:number};
export function parseReportAmount(value:string):number{
 const clean=value.trim();if(!/^\d+(?:\.\d{1,2})?$/.test(clean))throw Error('Enter a non-negative amount with up to two decimal places.');
 const amount=Number(clean);if(!Number.isFinite(amount)||amount>1_000_000_000)throw Error('Use an amount between 0 and 1,000,000,000.');return Math.round(amount*100);
}
export const kes=(minor:number)=>new Intl.NumberFormat('en-KE',{style:'currency',currency:'KES',maximumFractionDigits:minor%100?2:0}).format(minor/100);
export function summarizeReport(totals:ReportTotals){
 for(const value of Object.values(totals))if(!Number.isSafeInteger(value)||value<0||value>100_000_000_000)throw Error('Invalid report amount.');
 const difference=totals.sales-totals.previousSales;
 const change=totals.previousSales===0?null:Math.round(difference/totals.previousSales*1000)/10;
 const gross=totals.sales-totals.costOfGoods;
 const operating=gross-totals.expenses;
 const observations=[change===null?'No percentage comparison is shown because previous-period sales were zero.':`Sales ${difference>0?'increased':difference<0?'decreased':'were unchanged'}${difference===0?'':` by ${kes(Math.abs(difference))} (${Math.abs(change).toFixed(1)}%)`} compared with the previous period.`,
 `Sales less cost of goods sold: ${kes(gross)}.`,
 `After the entered operating expenses: ${kes(operating)}. This excludes tax, financing and any unentered costs.`,
 'Use equal-length periods and the same accounting basis. Sales are not the same as cash collected.'];
 const prompt=`Explain this business report in plain English for a business owner in Kenya. Use only these supplied totals. Do not invent transactions, trends, tax treatment or causes.\nSales: ${kes(totals.sales)}\nPrevious equal-length period sales: ${kes(totals.previousSales)}\nCost of goods sold: ${kes(totals.costOfGoods)}\nOperating expenses: ${kes(totals.expenses)}\nCalculated sales less cost of goods: ${kes(gross)}\nCalculated amount after entered operating expenses: ${kes(operating)}\n\nGive a short summary and three questions to investigate. Distinguish sales from cash received, gross profit from operating result, and known facts from possible explanations. State missing information and do not call this final net profit. Do not request customer names, contact details, payment credentials or personal records. A person will review the output against the source report.`;
 return {difference,change,gross,operating,observations,prompt};
}
