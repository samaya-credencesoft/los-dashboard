import { Branch } from '../../components/los_masters/branch/Branch';
import {API_URL} from '../../app.component';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { forEach } from '@angular/router/src/utils/collection';
import { Logger } from './logger.service';


@Injectable()

export class BranchServices{
     branches;
     branchNames:string[];




    constructor(private http: Http) {
     
        //this.branches=new Array<Branch>();
        //this.branchNames=new Array<string>();
    }
    createOrUpdateBranch(branc:Branch){
        console.log("error");
        return this.http.post(API_URL + '/createOrUpdateBranch', branc)
        .map(response => response.json() as Branch)
        .map(branc => !Branch.isNull(branc))
        .catch(BranchServices.handleError);
    }


    getAllBranches(){
        return this.http.get(API_URL + '/allBranches');
    }
    
  /*getAllBranches(){
      let promise = new Promise((resolve,reject)=>{
        this.http.get(API_URL + '/allBranches')
        .toPromise()
        .then(
            res=> { 
               console.log("getAllBraches");
                this.branches=res.json();
                console.log("3");
                resolve();
               
            },
            msg=>{
                reject();
            }
        )

      }

    );
  
       return promise;
    } */

    private static handleError(error: any) {
        const errorMessage = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : `Server error`;
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}