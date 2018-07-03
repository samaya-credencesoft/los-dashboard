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
  import { Scheme } from './Scheme';

import { MasterService } from '../../../services/common_services/master.service';
import { ActivatedRoute } from '@angular/router';
  
@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.css']
})
export class SchemeComponent implements OnInit {
  searchBySchemeNameControl: FormControl = new FormControl();
  schemeNameControl: FormControl = new FormControl();
  schemeCodeControl: FormControl = new FormControl();
  minimumLoanAmountControl: FormControl = new FormControl();
  maximumLoanAmountControl: FormControl = new FormControl();
  minimumTenureControl: FormControl = new FormControl();
  maximumTenureControl: FormControl = new FormControl();
  minimumEffectiveInterestRateControl: FormControl = new FormControl();
  maximumEffectiveInterestRateControl: FormControl = new FormControl();
  minimumFlatRateControl: FormControl = new FormControl();
  maximumFlatRateControl: FormControl = new FormControl();
  rateMethodControl: FormControl = new FormControl();
  rateTypeControl: FormControl = new FormControl();
  chargeCodeControl: FormControl = new FormControl();
  reschedulementControl: FormControl = new FormControl();
  bankNameControl: FormControl = new FormControl();
  branchControl: FormControl = new FormControl();
  bankAddressControl: FormControl = new FormControl();
  accountNumberControl: FormControl = new FormControl();
  accountTypeControl: FormControl = new FormControl();
  ifscCodeControl: FormControl = new FormControl();
 // myControl5: FormControl = new FormControl();

  model= new Scheme();
  scheme: Scheme;
  messages: Message[] = [];
  schemeNames ;
  schemes=[];
  filteredOptions: Observable<Scheme[]>;
  options:any;
  schemeName;
  schemeCode;
    minimumLoanAmount;
    maximumLoanAmount;
    minimumTenure;
    maximumTenure;
    minimumEffectiveInterestRate;
    maximumEffectiveInterestRate;
    minimumFlatRate;
    maximumFlatRate;
    rateMethod;
    rateType;
    chargeCode;
    reschedulement;
    bankName;
    branch;
    bankAddress;
    accountNumber;
    accountType;
    ifscCode;
 

  


  
  constructor(public masterService: MasterService,private actr:ActivatedRoute) { 
    this.actr.data.map(data=>data.brares.json()).subscribe((res)=>
    {
      this.schemes=res; 
    });
   this.model=new Scheme();
  }
  ngOnInit() {
    
   this.filteredOptions = this.searchBySchemeNameControl.valueChanges
      .pipe(
        startWith<string | Scheme>(''),
        map(value => typeof value === 'string' ? value : value.schemeName),
        map(schemeName => schemeName ? this.filter(schemeName) : this.schemes.slice())
      );
      
  }
  filter(schemeName: string): Scheme[] {
  return this.schemes.filter(scheme =>
  scheme.schemeName.toLowerCase().indexOf(schemeName.toLowerCase()) === 0);
  }

  displayFn(scheme?: Scheme): string | undefined {
    return scheme ? scheme.schemeName : undefined;
  }

  schemeMasterDetails(){
   this.schemeName = this.model.schemeName
   console.log(this.schemeName);
    this.masterService
          .createOrUpdateScheme(this.model)
          .subscribe(isSchemeMasterDetails => {
              if (isSchemeMasterDetails) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }
  
  schemeBySchemeName(scheme:Scheme)
{
  if(scheme != null) {


    this.model=this.scheme;

    this.model.schemeName=scheme.schemeName;
    this.model.schemeCode= scheme.schemeCode;
    this.model.minimumLoanAmount=scheme.minimumLoanAmount;
    this.model.maximumLoanAmount=scheme.maximumLoanAmount;
    this.model.minimumTenure=scheme.minimumTenure;
    this.model.maximumTenure=scheme.maximumTenure;
    this.model.minimumEffectiveInterestRate=scheme.minimumEffectiveInterestRate;
    this.model.maximumEffectiveInterestRate= scheme.maximumEffectiveInterestRate;
    this.model.minimumFlatRate=scheme.minimumFlatRate;
    this.model.maximumFlatRate=scheme.maximumFlatRate;
    this.model.rateMethod=scheme.rateMethod;
    this.model.rateType=scheme.rateType;
    this.model.chargeCode=scheme.chargeCode;
    this.model.reschedulement=scheme.reschedulement;
    this.model.bankName=scheme.bankName;
    this.model.branch=scheme.branch;
    this.model.bankAddress=scheme.bankAddress;
    this.model.accountNumber=scheme.accountNumber;
    this.model.accountType=scheme.accountType;
    this.model.ifscCode=scheme.ifscCode;
  }
 
 
}


}
