
import {API_URL} from '../app.component';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Resolve,ActivatedRouteSnapshot} from '@angular/router';
@Injectable()

export class ChargeCodeResolver implements Resolve<any>{
    constructor(private http: Http) {
    }
    resolve(route:ActivatedRouteSnapshot):Observable<any>{
        // console.log('Logging Collected route Parameter',route.params['name']);
        return this.http.get(API_URL + '/allChargeCodeDetails');
    }
    getAllChargeCodeDetails(){
        return this.http.get(API_URL + '/allChargeCodeDetails');
    }
    private static handleError(error: any) {
        const errorMessage = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : `Server error`;
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}