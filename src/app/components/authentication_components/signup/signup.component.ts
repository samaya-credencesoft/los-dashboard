import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';

import {AuthService} from '../../../services/common_services/auth.service';
import {User} from '../signup/user';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';

//import '../../../../assets/js/material-bootstrap-wizard.js';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    signUpModalNewRegister : any = true;
    signUpModalOldRegister : any = true;
    Flag : any;
    designations = [
        {value: 'Team Lead', viewValue: 'Team Lead'},
        {value: 'Floor Manger', viewValue: 'Floor Manger'},
        {value: 'Project Manager', viewValue: 'Project Manger'}
      ];
  model: User;
  messages: Message[] = [];

  constructor(private authService: AuthService,private router: Router) {
  }

  ngOnInit(): void {
      this.model = new User();
  }

  onRegister(details): void {
      
      this.model.uuid = "";
      this.model.password = "";
    //   console.log(this.model);
      this.messages = [];
      this.authService
          .register(this.model)
          .subscribe(isRegistered => {
            this.checkRegister(this.authService.signupResponse);
            //   if(this.authService.signupResponse == 200){
            //      this.signUpModalNewRegister = true;
            //     console.log("new user registered");
            //   }
            //    else{
            //    this.signUpModalOldRegister = true;
            //     console.log("user already exist");
            //   }
            //   console.log(this.model.email);
              // if(isRegistered == true){
              //   console.log("success response is :"+isRegistered);
              // }else{
              //   console.log("error response is :"+isRegistered); 
              // }
            //   if (isRegistered) {
            //       this.messages.push({severity: 'info', summary: 'Registered successfully!'});
                 //   this.signUpModal = true;
            //   } else {
            //       this.messages.push({severity: 'error', summary: 'Email already in use'});
            //     }
          });
  }

  checkRegister(responseStatus){
    // console.log(responseStatus);
    if(responseStatus == 200){
      this.signUpModalOldRegister = true;
      //  setTimeout(() => {
        // console.log("new user");
        this.signUpModalNewRegister = false;
      // }, 500);  
        this.Flag = true;
      }else if(responseStatus == 226){
        // console.log("old user");
        this.signUpModalNewRegister = true;
        this.signUpModalOldRegister = false;
        this.Flag = false;
      }
    }
                    onSignUp(){
                      console.log(this.Flag);
                        if(this.Flag == true){
                            this.router.navigate(['/']);
                        }else{
                          window.location.reload();
                        }
                    }    
}