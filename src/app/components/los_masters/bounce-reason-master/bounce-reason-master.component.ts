import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../services/common_services/master.service';
import {Message} from 'primeng/components/common/api';


import {
  Http,Response,
  RequestOptions,
  Headers,
  HttpModule
  } from '@angular/http';
  import { BounceReasonMaster } from './BounceReasonMaster';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-bounce-reason-master',
  templateUrl: './bounce-reason-master.component.html',
  styleUrls: ['./bounce-reason-master.component.css']
})
export class BounceReasonMasterComponent implements OnInit {
  model: BounceReasonMaster;
  messages: Message[] = [];

  constructor(private masterService: MasterService) { 
    this.model = new BounceReasonMaster();
  }

  ngOnInit() {
  }

  bounceReason(details){
    console.log(this.model);
    this.masterService
          .bounceReason(this.model)
          .subscribe(isBounceReason => {
              if (isBounceReason) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }

}
