import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../services/common_services/master.service';
import {Message} from 'primeng/components/common/api';


import {
  Http,Response,
  RequestOptions,
  Headers,
  HttpModule
  } from '@angular/http';
  import { SchemeMaster } from './SchemeMaster';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-scheme-master',
  templateUrl: './scheme-master.component.html',
  styleUrls: ['./scheme-master.component.css']
})
export class SchemeMasterComponent implements OnInit {
  model: SchemeMaster;
  messages: Message[] = [];

  constructor(private masterService: MasterService) { 
    this.model = new SchemeMaster();
  }

  ngOnInit() {
  }

  scheme(){
    console.log(this.model);
    this.masterService
          .scheme(this.model)
          .subscribe(isScheme => {
              if (isScheme) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }

}
