import { $$ } from "protractor";

export class Branch {

    id : string;
    branchName: string;
    branchManagerName: string;
    designation: string;
    branchCode: string;
    branchAddress: string;
    activeStatus: string;
   
    constructor() {
    }

    public static isNull(branch: Branch): boolean {
        return branch.branchName === null &&
        branch.branchManagerName === null &&
        branch.designation === null &&
        branch.branchCode === null &&
        branch.branchAddress === null &&
        branch.activeStatus == null 
            
    }
}