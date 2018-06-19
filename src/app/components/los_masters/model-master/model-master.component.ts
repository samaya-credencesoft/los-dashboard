import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../services/common_services/master.service';
import {Message} from 'primeng/components/common/api';


import {
  Http,Response,
  RequestOptions,
  Headers,
  HttpModule
  } from '@angular/http';
  import { ModelMaster } from './ModelMaster';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-model-master',
  templateUrl: './model-master.component.html',
  styleUrls: ['./model-master.component.css']
})
export class ModelMasterComponent implements OnInit {
  model: ModelMaster;
  messages: Message[] = [];

  constructor(private masterService: MasterService) { 
    this.model = new ModelMaster();
  }

  ngOnInit() {
  }

  modell(){
    console.log(this.model);
    this.masterService
          .modell(this.model)
          .subscribe(isModell => {
              if (isModell) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }

}
