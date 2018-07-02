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
  import { Product } from './Product';

import { MasterService } from '../../../services/common_services/master.service';
import { ActivatedRoute } from '@angular/router';
  
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  searchByProductNameControl: FormControl = new FormControl();
  productNameControl: FormControl = new FormControl();
  productCodeControl: FormControl = new FormControl();
  revolvingControl: FormControl = new FormControl();
  interestPerYearControl: FormControl = new FormControl();
  interestPerMonthControl: FormControl = new FormControl();
  activeControl: FormControl = new FormControl();
 // myControl5: FormControl = new FormControl();

  model= new Product();
  product: Product;
  messages: Message[] = [];
  productNames ;
  products=[];
  filteredOptions: Observable<Product[]>;
  options:any;
  productName;
  productCode;
  revolving;
  interestPerYear;
  interestPerMonth;
  active;

  


  
  constructor(public masterService: MasterService,private actr:ActivatedRoute) { 
    this.actr.data.map(data=>data.brares.json()).subscribe((res)=>
    {
      this.products=res; 
    });
   this.model=new Product();
  }
  ngOnInit() {
    
   this.filteredOptions = this.searchByProductNameControl.valueChanges
      .pipe(
        startWith<string | Product>(''),
        map(value => typeof value === 'string' ? value : value.productName),
        map(productName => productName ? this.filter(productName) : this.products.slice())
      );
      
  }
  filter(productName: string): Product[] {
  return this.products.filter(product =>
  product.productName.toLowerCase().indexOf(productName.toLowerCase()) === 0);
  }

  displayFn(product?: Product): string | undefined {
    return product ? product.productName : undefined;
  }

  productMasterDetails(){
   this.productName = this.model.productName
   console.log(this.productName);
    this.masterService
          .createOrUpdateProduct(this.model)
          .subscribe(isProductMasterDetails => {
              if (isProductMasterDetails) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }
  
  productByProductName(product:Product)
{
  if(product != null) {


    this.model=this.product;

    this.model.productName=product.productName;
    this.model.productCode= product.productCode;
     this.model.revolving=product.revolving;
     this.model.interestPerYear=product.interestPerYear;
     this.model.interestPerMonth=product.interestPerMonth;
     this.model.active=product.active;
  }
 
 
}


}
