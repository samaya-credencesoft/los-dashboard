import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../services/common_services/master.service';
import {Message} from 'primeng/components/common/api';


import {
  Http,Response,
  RequestOptions,
  Headers,
  HttpModule
  } from '@angular/http';
  import { ProductMaster } from './ProductMaster';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.css']
})
export class ProductMasterComponent implements OnInit {
  model: ProductMaster;
  messages: Message[] = [];

  constructor(private masterService: MasterService) { 
    this.model = new ProductMaster();
  }

  ngOnInit() {
  }

  product(details){
    console.log(this.model);
    this.masterService
          .product(this.model)
          .subscribe(isProduct => {
              if (isProduct) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }

}
