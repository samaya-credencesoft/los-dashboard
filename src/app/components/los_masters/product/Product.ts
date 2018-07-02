import { $$ } from "protractor";

export class Product {

    id : string;
    productName: string;
    productCode: string;
    revolving: string;
    interestPerYear: string;
    interestPerMonth: string;
    active: string;
   
   
    
    
   
    constructor() {
    }

    public static isNull(product: Product): boolean {
        return product.productName === null &&
        product.productCode === null &&
        product.revolving === null &&
        product.interestPerYear === null &&
        product.interestPerMonth === null &&
        product.active === null
        
            
    }
}



// Product Name:Personal Loan/Home Loan/Business Loan/Education Loan/Equipment Loan/
// Product Code:PL/HL/BL/EL/EP
// Revolving-YES/NO(IF yes then system will work overdraft facility)
// Interest per year-360/Actual/365
// Interest per Month-360/Actual/365
// Active:Tick Box required Yes/No)