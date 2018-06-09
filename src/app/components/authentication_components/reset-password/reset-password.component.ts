import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgModule} from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
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
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
@Injectable()

export class ResetPasswordComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private logger:Logger,
  private http:Http) { }
  public PASSWORD_RESET_API = API_URL+ '/resetPassword';
  public UID_EXIST_API = API_URL + '/isUuidValid';
  
  uidExist : boolean ;
  selectedId : any;
  password : any;
  confirmPassword : any;
  passwordNotMatched : any = false;
  passwordMatched : any = false;

  responseStatus : any;
  reponseWait : any = true;
  resetPasswordDone : any = true;
  resetPasswordAlreadyDone : any = false;
  Flag : any = false;
  ngOnInit() {
    this.selectedId = this.router.url.split('/')[2];
  }

  passwordFunction(passwordValue){
    this.password = passwordValue;
    this.passwordMatchedFunction(this.password,this.confirmPassword);
   }
   
   confirmPasswordFunction(confirmPasswordValue){
     this.confirmPassword = confirmPasswordValue;
     this.passwordMatchedFunction(this.password,this.confirmPassword);
   }

   passwordMatchedFunction(pwd,confpwd){
    //  console.log("password value is :" + pwd);
    //  console.log("confirm password value is :" + confpwd);
     if(pwd == confpwd){
      // console.log("matched");
      this.passwordMatched = true;
      this.passwordNotMatched = false;
     }else{
      // console.log("not matched");
      this.passwordNotMatched = true;
      this.passwordMatched = false;
     }
   }
   
  
  //Password Reset function
  resetPassword(form_val)
  {
    if(form_val.password == form_val.confirmPassword)
    {
      var credentials = {"password":form_val.password, "uuid":this.selectedId};
      
      //check here if the UID exist or not through a API call
      this.http.get(this.UID_EXIST_API+"/"+this.selectedId).map(res => res.json()).subscribe((response)=>{
      //  console.log(response);
        this.uidExist = response;
        if(this.uidExist === true)
        {
          return this.http.post(this.PASSWORD_RESET_API,credentials ).subscribe
          ( 
            data => {
                this.responseStatus = data.json();
                // console.log(this.responseStatus);
                if(this.responseStatus == true){
                  setTimeout(() => {
                    console.log(this.responseStatus);
                    this.reponseWait = false;
                    this.resetPasswordDone = false
                    this.resetPasswordAlreadyDone = false;
                    this.Flag = true;
                  },1000);    
                }
                else{
                  // console.log("password doesmt matched");
                  // this.reponseWait = true;
                  // this.resetPasswordDone = true;
                  // this.resetPasswordAlreadyDone = true;
                  // this.Flag = false;
                }
          });
        }
      });
    }
    else
    {
      
      setTimeout(()=>{
        this.reponseWait = false;
        this.resetPasswordDone = true;
        this.resetPasswordAlreadyDone = true;
        this.Flag = false;
      },2000);
      
    }
  
  }

  onResetPassword(){
      if(this.Flag == true){
        this.router.navigate(['/']);
      }else{
        window.location.reload();
      }
  }
  

}