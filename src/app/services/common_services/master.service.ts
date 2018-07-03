import { Router } from '@angular/router';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import { Branch } from '../../components/los_masters/branch/Branch';
// import { DepartmentMaster } from '../../components/los_masters/department/Department';
// import { ManufactureMaster } from '../../components/los_masters/manufacture/Manufacture';
import { Supplier } from '../../components/los_masters/supplier/Supplier';
import { Sourcing } from '../../components/los_masters/sourcing/Sourcing';
// import { ModelMaster } from '../../components/los_masters/model/Model';
import { Product } from '../../components/los_masters/product/Product';
import { Salesmanager } from '../../components/los_masters/salesmanager/Salesmanager';
// import { BounceReasonMaster } from '../../components/los_masters/bounce-reason/BounceReason';
import { Scheme } from '../../components/los_masters/scheme/Scheme';

import {API_URL} from '../../app.component';
import { Chargecode } from '../../components/los_masters/chargecode/Chargecode';


@Injectable()
export class MasterService {
   
    branches;
    branchNames:string[];



    constructor(private http: Http) {
    }

    createOrUpdateBranch(branc:Branch){
        console.log("error");
        return this.http.post(API_URL + '/createOrUpdateBranch', branc)
        .map(response => response.json() as Branch)
        .map(branc => !Branch.isNull(branc))
        .catch(MasterService.handleBranchError);
    }


    getAllBranches(){
        return this.http.get(API_URL + '/allBranches');
    }

    private static handleBranchError(error: any) {
        const errorMessage = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : `Server error`;
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }


    createOrUpdateSupplier(supplier:Supplier){
        console.log("error");
        return this.http.post(API_URL + '/createOrUpdateSupplier', supplier)
        .map(response => response.json() as Supplier)
        .map(supplier => !Supplier.isNull(supplier))
        .catch(MasterService.handleSupplierError);
    }


    getAllSuppliers(){
        return this.http.get(API_URL + '/allSuppliers');
    }



    createOrUpdateProduct(product:Product){
        console.log("error");
        return this.http.post(API_URL + '/createOrUpdateProduct', product)
        .map(response => response.json() as Product)
        .map(product => !Product.isNull(product))
        .catch(MasterService.handleSupplierError);
    }


    getAllProducts(){
        return this.http.get(API_URL + '/allProducts');
    }


    createOrUpdateSalesManagerDetails(salesManager:Salesmanager){
        console.log("error");
        return this.http.post(API_URL + '/createOrUpdateSalesManagerDetails', salesManager)
        .map(response => response.json() as Salesmanager)
        .map(salesManager => !Salesmanager.isNull(salesManager))
        .catch(MasterService.handleSupplierError);
    }


    getAllSalesManagerDetails(){
        return this.http.get(API_URL + '/allSalesManagerDetails');
    }

    createOrUpdateChargeCodeDetails(chargeCode:Chargecode){
        console.log("error");
        return this.http.post(API_URL + '/createOrUpdateChargeCodeDetails', chargeCode)
        .map(response => response.json() as Chargecode)
        .map(chargeCode => !Chargecode.isNull(chargeCode))
        .catch(MasterService.handleSupplierError);
    }


    getAllChargeCodeDetails(){
        return this.http.get(API_URL + '/allChargeCodeDetails');
    }

    createOrUpdateSource(source:Sourcing){
        console.log("error");
        return this.http.post(API_URL + '/createOrUpdateSource', source)
        .map(response => response.json() as Sourcing)
        .map(source => !Sourcing.isNull(source))
        .catch(MasterService.handleSupplierError);
    }


    getAllSources(){
        return this.http.get(API_URL + '/allSources');
    }

    createOrUpdateScheme(scheme:Scheme){
        console.log("error");
        return this.http.post(API_URL + '/createOrUpdateScheme', scheme)
        .map(response => response.json() as Scheme)
        .map(scheme => !Scheme.isNull(scheme))
        .catch(MasterService.handleSupplierError);
    }


    getAllSchemes(){
        return this.http.get(API_URL + '/allSchemes');
    }




    private static handleSupplierError(error: any) {
        const errorMessage = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : `Server error`;
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }

    



    // department(department:DepartmentMaster){

    //     return this.http.post(API_URL + '/department', department)
    //     .map(response => response.json() as DepartmentMaster)
    //     .map(department => !DepartmentMaster.isNull(department))
    //     .catch(MasterService.handleError);
    // }

    // manufacture(manufacture:ManufactureMaster){

    //     return this.http.post(API_URL + '/manufacture', manufacture)
    //     .map(response => response.json() as ManufactureMaster)
    //     .map(manufacture => !ManufactureMaster.isNull(manufacture))
    //     .catch(MasterService.handleError);
    // }


    // sourcing(sourcing:SourcingMaster){

    //     return this.http.post(API_URL + '/sourcing', sourcing)
    //     .map(response => response.json() as SourcingMaster)
    //     .map(sourcing => !SourcingMaster.isNull(sourcing))
    //     .catch(MasterService.handleError);
    // }

    // modell(model:ModelMaster){

    //     return this.http.post(API_URL + '/modell', model)
    //     .map(response => response.json() as ModelMaster)
    //     .map(model => !ModelMaster.isNull(model))
    //     .catch(MasterService.handleError);
    // }

    // product(product:ProductMaster){

    //     return this.http.post(API_URL + '/product', product)
    //     .map(response => response.json() as ProductMaster)
    //     .map(product => !ProductMaster.isNull(product))
    //     .catch(MasterService.handleError);
    // }

    // salesmanager(salesmanager:SalesmanagerMaster){

    //     return this.http.post(API_URL + '/salesmanager', salesmanager)
    //     .map(response => response.json() as SalesmanagerMaster)
    //     .map(salesmanager => !SalesmanagerMaster.isNull(salesmanager))
    //     .catch(MasterService.handleError);
    // }

    // bounceReason(bounceReason:BounceReasonMaster){

    //     return this.http.post(API_URL + '/bounceReason', bounceReason)
    //     .map(response => response.json() as BounceReasonMaster)
    //     .map(bounceReason => !BounceReasonMaster.isNull(bounceReason))
    //     .catch(MasterService.handleError);
    // }

    // scheme(scheme:SchemeMaster){

    //     return this.http.post(API_URL + '/scheme', scheme)
    //     .map(response => response.json() as SchemeMaster)
    //     .map(scheme => !SchemeMaster.isNull(scheme))
    //     .catch(MasterService.handleError);
    // }


}