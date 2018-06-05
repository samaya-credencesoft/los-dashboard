import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/common_services/auth.service';
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

  constructor(private authService: AuthService) { 
    this.model = new BounceReasonMaster();
  }

  ngOnInit() {
  }

  bounceReasonMasterDetails(details){
    console.log(this.model);
    this.authService
          .bounceReasonMasterDetails(this.model)
          .subscribe(isBounceReasonMasterDetails => {
              if (isBounceReasonMasterDetails) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }

}
