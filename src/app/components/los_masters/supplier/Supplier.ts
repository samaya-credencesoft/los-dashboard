import { $$ } from "protractor";

export class Supplier {

    id : string;
    supplierName: string;
    manufacturerName: string;
    location: string;
    panNumber: string;
    gstNumber: string;
    loanType: string;
    address: string;
        
    
   
    constructor() {
    }

    public static isNull(supplier: Supplier): boolean {
        return supplier.supplierName === null &&
        supplier.manufacturerName === null &&
        supplier.location === null &&
        supplier.panNumber === null &&
        supplier.gstNumber === null &&
        supplier.loanType === null &&
        supplier.address === null
        
            
    }
}