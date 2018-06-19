import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../services/common_services/master.service';
import {Message} from 'primeng/components/common/api';


import {
  Http,Response,
  RequestOptions,
  Headers,
  HttpModule
  } from '@angular/http';
  import { SalesmanagerMaster } from './SalesmanagerMaster';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-salesmanager-master',
  templateUrl: './salesmanager-master.component.html',
  styleUrls: ['./salesmanager-master.component.css']
})
export class SalesmanagerMasterComponent implements OnInit {
  model: SalesmanagerMaster;
  messages: Message[] = [];

  constructor(private masterService: MasterService) { 
    this.model = new SalesmanagerMaster();
  }

  ngOnInit() {
  }

  salesmanager(){
    console.log(this.model);
    this.masterService
          .salesmanager(this.model)
          .subscribe(isSalesmanager => {
              if (isSalesmanager) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }

}
