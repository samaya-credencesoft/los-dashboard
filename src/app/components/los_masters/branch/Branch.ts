import { $$ } from "protractor";
import { Injectable } from "@angular/core";

export class Branch {

    id : string;
    branchName: string;
    branchManagerName: string;
    designation: string;
    branchCode: string;
    activeStatus: string;
   /*
    constructor(branchName,branchManagerName,branchCode,activeStatus) {
        this.branchName=branchName;
        this.branchManagerName=branchManagerName;
        this.branchCode=branchCode;
        this.activeStatus=activeStatus;

    }
    */
    constructor(){

    }
    public static isNull(branchMaster: Branch): boolean {
        return branchMaster.branchName === null &&
        branchMaster.branchManagerName === null &&
        branchMaster.designation === null &&
        branchMaster.branchCode === null &&
        branchMaster.activeStatus == null 
            
    }
}