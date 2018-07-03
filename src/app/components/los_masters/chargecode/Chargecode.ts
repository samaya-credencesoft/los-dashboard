import { $$ } from "protractor";

export class Chargecode {

    id : string;
    name : string;
    chargeCode : string;
    dueBase : string;
    taxApplicable : string;
    manualAdvice : string;
    waiveOff : string;
        
    
   
    constructor() {
    }

    public static isNull(chargecode: Chargecode): boolean {
        return chargecode.name === null &&
        chargecode.chargeCode === null &&
        chargecode.dueBase === null &&
        chargecode.taxApplicable === null &&
        chargecode.manualAdvice === null &&
        chargecode.waiveOff === null 
        
            
    }
}