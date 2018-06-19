import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../services/common_services/master.service';
import {Message} from 'primeng/components/common/api';


import {
  Http,Response,
  RequestOptions,
  Headers,
  HttpModule
  } from '@angular/http';
  import { BranchMaster } from './BranchMaster';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';
  
@Component({
  selector: 'app-branch-master',
  templateUrl: './branch-master.component.html',
  styleUrls: ['./branch-master.component.css']
})
export class BranchMasterComponent implements OnInit {
  model: BranchMaster;
  messages: Message[] = [];

 
  constructor(private masterService: MasterService) { 
    this.model = new BranchMaster();
  }

  ngOnInit() {
  }

  branch(details){
    console.log(this.model);
    this.masterService
          .branch(this.model)
          .subscribe(isBranch => {
              if (isBranch) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }
  

}
