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
    email : any;
    reponseWait : any = true;
    signUpModalNewRegister : any = true;
    signUpModalOldRegister : any = false;
    Flag : any;
    model: User;
    messages: Message[] = [];

    designations = [
        {value: 'Team Lead', viewValue: 'Team Lead'},
        {value: 'Floor Manger', viewValue: 'Floor Manger'},
        {value: 'Project Manager', viewValue: 'Project Manger'}
      ];
 
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
            //   if (isRegistered) {
            //       this.messages.push({severity: 'info', summary: 'Registered successfully!'});
                 //   this.signUpModal = true;
            //   } else {
            //       this.messages.push({severity: 'error', summary: 'Email already in use'});
            //     }
          });
  }

  checkRegister(responseStatus){
    console.log(responseStatus);
    if(responseStatus == 200){
          setTimeout(() => {
            console.log("new user");
            this.reponseWait = false;
            this.signUpModalOldRegister = false;
            this.signUpModalNewRegister = false;
            this.Flag = true;
          },1000);    
    }else if(responseStatus == 226){
        console.log("old user");
        this.reponseWait = false;
        this.signUpModalNewRegister = true;
        this.signUpModalOldRegister = true;
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