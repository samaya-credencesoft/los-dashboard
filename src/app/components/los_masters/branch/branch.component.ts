import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/common_services/auth.service';
import {Message} from 'primeng/components/common/api';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {
  Http,Response,
  RequestOptions,
  Headers,
  HttpModule
  } from '@angular/http';
  import { Branch } from './Branch';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';
import { BranchServices } from '../../../services/common_services/branch.service';
import { ActivatedRoute } from '@angular/router';
//import { BranchResolver } from './../../../resolver/branch-resolver.service'
  
@Component({
  selector: 'app-branch-master',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchMasterComponent implements OnInit {
  myControl: FormControl = new FormControl();
  myControl1: FormControl = new FormControl();
  myControl2: FormControl = new FormControl();
  myControl3: FormControl = new FormControl();
  myControl4: FormControl = new FormControl();
 // myControl5: FormControl = new FormControl();

  model: Branch;
  branch:Branch;
  messages: Message[] = [];
  branchNames ;
  branches=[];
  filteredOptions: Observable<Branch[]>;
  options:any;
  branchName;
  branchManagerName;
  designation;
  branchCode;
  activeStatus;

  
  constructor(public branchService: BranchServices,private actr:ActivatedRoute) { 
    this.actr.data.map(data=>data.brares.json()).subscribe((res)=>
    {
      this.branches=res; 
    });
   this.model=new Branch();
  }
  ngOnInit() {
    
   this.filteredOptions = this.myControl.valueChanges
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

branchMasterDetails(details){
   
  this.branchService
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
  console.log("branchByBranchName");
  //this.model=this.branch;
 this.branchManagerName=branch.branchManagerName;
  this.branchCode=branch.branchCode;
  this.activeStatus=branch.activeStatus;
  this.designation=branch.designation;
  this.branchCode=branch.branchCode;
  console.log(branch.activeStatus);
  //console.log(this.model.branchCode);
  //console.log(this.model.activeStatus);
  //console.log(this.model.designation);
 
}

}
