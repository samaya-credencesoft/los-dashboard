import { Branch } from '../components/los_masters/branch/Branch';
import {API_URL} from '../app.component';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { forEach } from '@angular/router/src/utils/collection';
import {Resolve,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
@Injectable()

export class BranchResolver implements Resolve<any>{
    constructor(private http: Http) {
    }
    resolve(route:ActivatedRouteSnapshot,rstate:RouterStateSnapshot):Observable<any>{
        console.log('Logging Collected route Parameter',route.params['name']);
        return this.http.get(API_URL + '/allBranches');
    }
    getAllBranches(){
        return this.http.get(API_URL + '/allBranches');
    }
    private static handleError(error: any) {
        const errorMessage = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : `Server error`;
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}