import { Router } from '@angular/router';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {User} from '../../components/authentication_components/signup/user';


import {API_URL} from '../../app.component';


@Injectable()
export class AuthService {
    // signInModal : boolean = false;
    signinResponse : any;
    signupResponse : any;
    signInModal : any = true;
    isLoggedIn = false;  // use this flag to check logged in or not.

    constructor(private http: Http,private router:Router) {
    }

    private static handleError(error: any) {
        const errorMessage = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : `Server error`;
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }

    validate_user(user: User, login_url:string) {
     this.http.post(login_url, user).map(res => res.json()).subscribe((response)=>{
                console.log(response);
                if(response.login_status === "success"){
                    this.isLoggedIn = true;
                    localStorage.setItem('isLoggedIn', "true");
                    // console.log("login success");
                    this.router.navigate(['dashboard']);
                }else if(response.login_status === "failed"){
                    // console.log("login failed");
                    // setTimeout(()=>{
                        this.signinResponse = response.login_status;
                    // },2000);
                    //console.log(this.signInModal);
                    // this.signInModal = true;
                    //this.router.navigate(['signin']);
                }else{
                    // console.log("user doesn't exist ! please sign up !");
                    // this.router.navigate(['signup']);
                }
                  });
    
    }


    logOut(): Observable<boolean> {
        this.isLoggedIn = !this.isLoggedIn;
        return Observable.of(false);
    }


    // register(user: User): Observable<boolean> {
    //     return this.http.post(API_URL + '/register', user)
    //         // .map(response => response.json() as User)
    //         .map(response => {this.signupResponse = response.status; })
    //         // .map(currentUser => !User.isNull(currentUser))
    //         // .map(currentUser => {console.log(currentUser)})
    //         .catch(AuthService.handleError);
    // }



    public updateUser(user:User) {
        return this.http.put(API_URL+ '/updateUser', user);
    };


    signupDetails(signup:User){

        return this.http.post(API_URL + '/signupDetails', signup)
        .map(response => response.json() as User)
        .map(signup => !User.isNull(signup))
        .catch(AuthService.handleError);
    }
    
}