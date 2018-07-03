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
  import { Chargecode } from './Chargecode';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';
import { MasterService } from '../../../services/common_services/master.service';
import { ActivatedRoute } from '@angular/router';
  
@Component({
  selector: 'app-chargecode-master',
  templateUrl: './chargecode.component.html',
  styleUrls: ['./chargecode.component.css']
})
export class ChargecodeComponent implements OnInit {
  searchByChargeCodeNameControl: FormControl = new FormControl();
  nameControl: FormControl = new FormControl();
  chargeCodeControl: FormControl = new FormControl();
  dueBaseControl: FormControl = new FormControl();
  taxApplicableControl: FormControl = new FormControl();
  manualAdviceControl: FormControl = new FormControl();
  waiveOffControl: FormControl = new FormControl();

 
  model= new Chargecode();
  chargeCode: Chargecode;
  messages: Message[] = [];
  names ;
  chargecodes=[];
  filteredOptions: Observable<Chargecode[]>;
  options:any;
  name;
  dueBase;
  taxApplicable;
  manualAdvice;
  waiveOff;

  

  
  constructor(public masterService: MasterService,private actr:ActivatedRoute) { 
    this.actr.data.map(data=>data.brares.json()).subscribe((res)=>
    {
      this.chargecodes=res; 
    });
   this.model=new Chargecode();
  }
  ngOnInit() {
    
   this.filteredOptions = this.searchByChargeCodeNameControl.valueChanges
      .pipe(
        startWith<string | Chargecode>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this.filter(name) : this.chargecodes.slice())
      );
      
  }
  filter(name: string): Chargecode[] {
  return this.chargecodes.filter(chargeCode =>
    chargeCode.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  displayFn(chargeCode?: Chargecode): string | undefined {
    return chargeCode ? chargeCode.name : undefined;
  }

  chargeCodeMasterDetails(){
   this.name = this.model.name
   console.log(this.name);
    this.masterService
          .createOrUpdateChargeCodeDetails(this.model)
          .subscribe(isChargeCodeDetails => {
              if (isChargeCodeDetails) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }
  
  chargeCodeDetailsByChargeCodeName(chargeCode:Chargecode)
{
  if(chargeCode != null) {


    this.model=this.chargeCode;

    this.model.name=chargeCode.name;
    this.model.chargeCode= chargeCode.chargeCode;
    this.model.dueBase=chargeCode.dueBase;
    this.model.taxApplicable=chargeCode.taxApplicable;
    this.model.manualAdvice=chargeCode.manualAdvice;
    this.model.waiveOff=chargeCode.waiveOff;
    
    
  }
  
}


}
