import { $$ } from "protractor";

export class Salesmanager {

    id : string;
    name: string;
    designation: string;
    employeeCode: string;
   
    
    
   
    constructor() {
    }

    public static isNull(salesmanager: Salesmanager): boolean {
        return salesmanager.name === null &&
        salesmanager.designation === null &&
        salesmanager.employeeCode === null
    
        
            
    }
}