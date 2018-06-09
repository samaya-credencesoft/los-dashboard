import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgModule} from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Logger } from '../../../services/common_services/logger.service';
import {
    Http,
    Response,
    RequestOptions,
    Headers,
    HttpModule,
  
  } from '@angular/http';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { HttpErrorResponse } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs/Observable';

  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  import {API_URL} from '../../../app.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

@Injectable()

export class ForgotPasswordComponent implements OnInit {
// forgotPasswordModal : any = false;
  
  responseStatus : any ;
  reponseWait : any = true;
  forgotPasswordExistingUser : any = true;
  forgotPasswordNotAnUser : any = false;
  Flag : any = false;
  constructor(private route: ActivatedRoute,private router: Router,private logger:Logger,
    private http:Http) { }
    public FORGOT_PASSWORD_API = API_URL+ '/forgotPassword';
   
  password : any;
  email : boolean;


ngOnInit() {
   
  }
 

      //forgot password function
      forgotPassword(email_val)
      {
          this.http.post(this.FORGOT_PASSWORD_API, email_val).map(res => res.json()).subscribe((response)=>{
            this.responseStatus = response;
            // console.log(response);
            if(this.responseStatus == true){
              setTimeout(() => {
                console.log("existing user");
                this.reponseWait = false;
                this.forgotPasswordNotAnUser = false;
                this.forgotPasswordExistingUser = false;
                this.Flag = true;
              },1000);    
            }else{
              console.log("not an user");
              this.reponseWait = false;
              this.forgotPasswordNotAnUser = true;
              this.forgotPasswordExistingUser = true;
              this.Flag = false;
            }

          });

      }  

      onForgotPassword(){
        if(this.Flag == true){
            this.router.navigate(['/']);
        }else{
          this.router.navigate(['/signup']);
        }
      }
}
