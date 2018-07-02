import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

  import { Supplier } from './Supplier';
import { MasterService } from '../../../services/common_services/master.service';
import { ActivatedRoute } from '@angular/router';
  
@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  searchBySupplierNameControl: FormControl = new FormControl();
  supplierNameControl: FormControl = new FormControl();
  manufacturerNameControl: FormControl = new FormControl();
  locationControl: FormControl = new FormControl();
  panNumberControl: FormControl = new FormControl();
  gstNumberControl: FormControl = new FormControl();
  loanTypeControl: FormControl = new FormControl();
  addressControl: FormControl = new FormControl();
 

  model= new Supplier();
  supplier: Supplier;
  messages: Message[] = [];
  supplierNames ;
  suppliers=[];
  filteredOptions: Observable<Supplier[]>;
  options:any;
  supplierName;
  manufacturerName;
  location;
  panNumber;
  gstNumber;
  loanType;
  address;
  // branchManagerName;
  // designation;
  // branchCode;
  // branchAddress;
  // activeStatus;

  


  constructor(public masterService: MasterService,private actr:ActivatedRoute) { 
    this.actr.data.map(data=>data.brares.json()).subscribe((res)=>
    {
      this.suppliers=res; 
    });
   this.model=new Supplier();
  }
  ngOnInit() {
    
   this.filteredOptions = this.searchBySupplierNameControl.valueChanges
      .pipe(
        startWith<string | Supplier>(''),
        map(value => typeof value === 'string' ? value : value.supplierName),
        map(supplierName => supplierName ? this.filter(supplierName) : this.suppliers.slice())
      );
      
  }
  filter(supplierName: string): Supplier[] {
  return this.suppliers.filter(supplier =>
  supplier.supplierName.toLowerCase().indexOf(supplierName.toLowerCase()) === 0);
  }

  displayFn(supplier?: Supplier): string | undefined {
    return supplier ? supplier.supplierName : undefined;
  }

  supplierMasterDetails(){
   this.supplierName = this.model.supplierName
   console.log(this.supplierName);
    this.masterService
          .createOrUpdateSupplier(this.model)
          .subscribe(isSupplierMasterDetails => {
              if (isSupplierMasterDetails) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }
  
  supplierBySupplierName(supplier:Supplier)
{
  if(supplier != null) {


    this.model=this.supplier;

    this.model.manufacturerName=supplier.manufacturerName;
    this.model.supplierName= supplier.supplierName;
   
     this.model.location=supplier.location;
     this.model.panNumber=supplier.panNumber;
     this.model.gstNumber=supplier.gstNumber;
     this.model.loanType=supplier.loanType;
     this.model.address=supplier.address;
  }
  
 
}


}
