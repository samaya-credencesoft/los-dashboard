import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../services/common_services/master.service';
import {Message} from 'primeng/components/common/api';


import {
  Http,Response,
  RequestOptions,
  Headers,
  HttpModule
  } from '@angular/http';
  import { DepartmentMaster } from './DepartmentMaster';
  import { HttpErrorResponse } from '@angular/common/http';
  import {ErrorStateMatcher} from '@angular/material/core';
  

@Component({
  selector: 'app-department-master',
  templateUrl: './department-master.component.html',
  styleUrls: ['./department-master.component.css']
})
export class DepartmentMasterComponent implements OnInit {
  model: DepartmentMaster;
  messages: Message[] = [];

  
  constructor(private masterService: MasterService) { 
    this.model = new DepartmentMaster();
  }

  ngOnInit() {
  }

  department(){
    console.log(this.model);
    this.masterService
          .department(this.model)
          .subscribe(isDepartment => {
              if (isDepartment) {
                  this.messages.push({severity: 'info', summary: 'Inserted successfully!'});
              } else {
                  this.messages.push({severity: 'error', summary: 'Not inserted'});
              }
          });
  }

}
