import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../services/common_services/master.service';
import {Message} from 'primeng/components/common/api';


import {
  Http,Response,
  RequestOptions,
  Headers,
  HttpModule
  } from '@angular/http';
  import { ManufactureMaster } from './ManufactureMaster';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-manufacture-master',
  templateUrl: './manufacture-master.component.html',
  styleUrls: ['./manufacture-master.component.css']
})
export class ManufactureMasterComponent implements OnInit {
  model: ManufactureMaster;
  messages: Message[] = [];

  constructor(private masterService: MasterService) { 
    this.model = new ManufactureMaster();
  }

  ngOnInit() {
  }

  manufacture(){
    console.log(this.model);
    this.masterService
          .manufacture(this.model)
          .subscribe(isManufacture => {
              if (isManufacture) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }

}
