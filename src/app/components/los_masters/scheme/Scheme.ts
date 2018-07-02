import { $$ } from "protractor";

export class Scheme {

    id : string;
    schemeName: string;
    schemeCode: string;
    minimumLoanAmount: number;
    maximumLoanAmount: number;
    minimumTenure: number;
    maximumTenure: number;
    minimumEffectiveInterestRate: number;
    maximumEffectiveInterestRate: number;
    minimumFlatRate: number;
    maximumFlatRate: number;
    rateMethod: string;
    rateType: string;
    chargeCode: string;
    reschedulement: string;

   
    
    
   
    constructor() {
    }

    public static isNull(scheme: Scheme): boolean {
        return scheme.schemeName === null &&
        scheme.schemeCode === null &&
        scheme.minimumLoanAmount === null &&
        scheme.maximumLoanAmount === null &&
        scheme.minimumTenure === null &&
        scheme.maximumTenure === null &&
        scheme.minimumEffectiveInterestRate === null &&
        scheme.maximumEffectiveInterestRate === null &&
        scheme.minimumFlatRate === null &&
        scheme.maximumFlatRate === null &&
        scheme.rateMethod === null &&
        scheme.rateType === null &&
        scheme.chargeCode === null &&
        scheme.reschedulement === null

    
        
            
    }
}