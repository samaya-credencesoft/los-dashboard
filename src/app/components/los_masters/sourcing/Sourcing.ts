import { $$ } from "protractor";

export class Sourcing {

    id : string;
    dsaName: string;
    location: string;
    state: string;
    panNumber: string;
    gstNumber: string;
    loanType: string;
    address: string;
    
    
    
   
    constructor() {
    }

    public static isNull(sourcing: Sourcing): boolean {
        return sourcing.dsaName === null &&
        sourcing.location === null &&
        sourcing.state === null &&
        sourcing.panNumber === null &&
        sourcing.gstNumber === null &&
        sourcing.loanType === null &&
        sourcing.address === null
        
        
            
    }
}