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
  import { Salesmanager } from './Salesmanager';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';
import { MasterService } from '../../../services/common_services/master.service';
import { ActivatedRoute } from '@angular/router';
//import { BranchResolver } from './../../../resolver/branch-resolver.service'
  
@Component({
  selector: 'app-salesmanager-master',
  templateUrl: './salesmanager.component.html',
  styleUrls: ['./salesmanager.component.css']
})
export class SalesmanagerComponent implements OnInit {
  searchBySalesManagerNameControl: FormControl = new FormControl();
  nameControl: FormControl = new FormControl();
  designationControl: FormControl = new FormControl();
  employeeCodeControl: FormControl = new FormControl();
 
  model= new Salesmanager();
  salesManager: Salesmanager;
  messages: Message[] = [];
  names ;
  salesmanagers=[];
  filteredOptions: Observable<Salesmanager[]>;
  options:any;
  name;
  designation;
  employeeCode;

  

  
  constructor(public masterService: MasterService,private actr:ActivatedRoute) { 
    this.actr.data.map(data=>data.brares.json()).subscribe((res)=>
    {
      this.salesmanagers=res; 
    });
   this.model=new Salesmanager();
  }
  ngOnInit() {
    
   this.filteredOptions = this.searchBySalesManagerNameControl.valueChanges
      .pipe(
        startWith<string | Salesmanager>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this.filter(name) : this.salesmanagers.slice())
      );
      
  }
  filter(name: string): Salesmanager[] {
  return this.salesmanagers.filter(salesManager =>
    salesManager.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  displayFn(salesManager?: Salesmanager): string | undefined {
    return salesManager ? salesManager.name : undefined;
  }

  salesManagerMasterDetails(){
   this.name = this.model.name
   console.log(this.name);
    this.masterService
          .createOrUpdateSalesManagerDetails(this.model)
          .subscribe(isSalesManagerMasterDetails => {
              if (isSalesManagerMasterDetails) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }
  
  salesManagerDetailsBySalesManagerName(salesManager:Salesmanager)
{
  if(salesManager != null) {


    this.model=this.salesManager;

    this.model.name=salesManager.name;
    this.model.designation= salesManager.designation;
  
     this.model.employeeCode=salesManager.employeeCode;
    
  }
  
}


}
