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
  import { Sourcing } from './Sourcing';

import { MasterService } from '../../../services/common_services/master.service';
import { ActivatedRoute } from '@angular/router';
  
@Component({
  selector: 'app-sourcing',
  templateUrl: './sourcing.component.html',
  styleUrls: ['./sourcing.component.css']
})
export class SourcingComponent implements OnInit {
  searchByDsaNameControl: FormControl = new FormControl();
  dsaNameControl: FormControl = new FormControl();
  locationControl: FormControl = new FormControl();
  stateControl: FormControl = new FormControl();
  panNumberControl: FormControl = new FormControl();
  gstNumberControl: FormControl = new FormControl();
  loanTypeControl: FormControl = new FormControl();
  addressControl: FormControl = new FormControl();

  model= new Sourcing();
  sourcing: Sourcing;
  messages: Message[] = [];
  dsaNames ;
  sourcings=[];
  filteredOptions: Observable<Sourcing[]>;
  options:any;
  dsaName;
  location;
  state;
  panNumber;
  gstNumber;
  loanType;
  address;
  

  


  
  constructor(public masterService: MasterService,private actr:ActivatedRoute) { 
    this.actr.data.map(data=>data.brares.json()).subscribe((res)=>
    {
      this.sourcings=res; 
    });
   this.model=new Sourcing();
  }
  ngOnInit() {
    
   this.filteredOptions = this.searchByDsaNameControl.valueChanges
      .pipe(
        startWith<string | Sourcing>(''),
        map(value => typeof value === 'string' ? value : value.dsaName),
        map(dsaName => dsaName ? this.filter(dsaName) : this.sourcings.slice())
      );
      
  }
  filter(dsaName: string): Sourcing[] {
  return this.sourcings.filter(sourcing =>
  sourcing.dsaName.toLowerCase().indexOf(dsaName.toLowerCase()) === 0);
  }

  displayFn(sourcing?: Sourcing): string | undefined {
    return sourcing ? sourcing.dsaName : undefined;
  }

  sourceMasterDetails(){
   this.dsaName = this.model.dsaName
   console.log(this.dsaName);
    this.masterService
          .createOrUpdateSource(this.model)
          .subscribe(isSourceMasterDetails => {
              if (isSourceMasterDetails) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }
  
  sourceByDsaName(sourcing:Sourcing)
{
  if(sourcing != null) {


    this.model=this.sourcing;

    this.model.dsaName=sourcing.dsaName;
    this.model.location= sourcing.location;
     this.model.state=sourcing.state;
     this.model.panNumber=sourcing.panNumber;
     this.model.gstNumber=sourcing.gstNumber;
     this.model.loanType=sourcing.loanType;
     this.model.address=sourcing.address;
     
  }
 
 
}


}
