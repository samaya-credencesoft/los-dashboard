import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {FormBuilder, FormGroup, Validators,FormGroupDirective,NgForm} from '@angular/forms';
import {
  Http,Response,
  RequestOptions,
  Headers,
  HttpModule
  } from '@angular/http';
  import { Branch } from './Branch';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';
import { MasterService } from '../../../services/common_services/master.service';
import { ActivatedRoute } from '@angular/router';
//import { BranchResolver } from './../../../resolver/branch-resolver.service'
  
@Component({
  selector: 'app-branch-master',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {
  searchByBranchNameControl: FormControl = new FormControl();
  branchNameControl: FormControl = new FormControl();
  branchAddressControl: FormControl = new FormControl();
  branchManagerControl: FormControl = new FormControl();
  branchCodeControl: FormControl = new FormControl();
  statusControl: FormControl = new FormControl();
  designationControl: FormControl = new FormControl();
 // myControl5: FormControl = new FormControl();

  model= new Branch();
  branch: Branch;
  messages: Message[] = [];
  branchNames ;
  branches=[];
  filteredOptions: Observable<Branch[]>;
  options:any;
  branchName;
  branchManagerName;
  designation;
  branchCode;
  branchAddress;
  activeStatus;

  


  branch_step = 0;

  branchSetStep(index: number) {
    this.branch_step = index;
  }

  branchNextStep() {
    this.branch_step++;
  }

  branchPrevStep() {
    this.branch_step--;
  }

  
  constructor(public masterService: MasterService,private actr:ActivatedRoute) { 
    this.actr.data.map(data=>data.brares.json()).subscribe((res)=>
    {
      this.branches=res; 
    });
   this.model=new Branch();
  }
  ngOnInit() {
    
   this.filteredOptions = this.searchByBranchNameControl.valueChanges
      .pipe(
        startWith<string | Branch>(''),
        map(value => typeof value === 'string' ? value : value.branchName),
        map(branchName => branchName ? this.filter(branchName) : this.branches.slice())
      );
      
  }
  filter(branchName: string): Branch[] {
  return this.branches.filter(branch =>
  branch.branchName.toLowerCase().indexOf(branchName.toLowerCase()) === 0);
  }

  displayFn(branch?: Branch): string | undefined {
    return branch ? branch.branchName : undefined;
  }

  branchMasterDetails(){
   this.branchName = this.model.branchName
   console.log(this.branchName);
    this.masterService
          .createOrUpdateBranch(this.model)
          .subscribe(isBranchMasterDetails => {
              if (isBranchMasterDetails) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }
  
  branchByBranchName(branch:Branch)
{
  if(branch != null) {


    this.model=this.branch;

    this.model.branchManagerName=branch.branchManagerName;
    this.model.branchName= branch.branchName;
    // console.log(this.model.branchName);
     this.model.branchCode=branch.branchCode;
     this.model.activeStatus=branch.activeStatus;
     this.model.designation=branch.designation;
     this.model.branchAddress=branch.branchAddress;
     this.model.branchCode=branch.branchCode;
  }
  
  // console.log("branchByBranchName");
 
  // console.log(branch.activeStatus);
  //console.log(this.model.branchCode);
  //console.log(this.model.activeStatus);
  //console.log(this.model.designation);
 
}


}
