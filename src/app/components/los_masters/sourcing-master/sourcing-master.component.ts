import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../services/common_services/master.service';
import {Message} from 'primeng/components/common/api';


import {
  Http,Response,
  RequestOptions,
  Headers,
  HttpModule
  } from '@angular/http';
  import { SourcingMaster } from './SourcingMaster';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-sourcing-master',
  templateUrl: './sourcing-master.component.html',
  styleUrls: ['./sourcing-master.component.css']
})
export class SourcingMasterComponent implements OnInit {
  model: SourcingMaster;
  messages: Message[] = [];

  constructor(private masterService: MasterService) { 
    this.model = new SourcingMaster();
  }

  ngOnInit() {
  }

  sourcing(){
    console.log(this.model);
    this.masterService
          .sourcing(this.model)
          .subscribe(isSourcing => {
              if (isSourcing) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }

}
