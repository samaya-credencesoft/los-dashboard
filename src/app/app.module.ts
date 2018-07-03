import { DashboardService } from './services/dashboard_services/dashboard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppMaterialModules } from './material.module';
import {BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


import {Http, Response, RequestOptions, Headers, HttpModule} from '@angular/http';
import { Logger } from './services/common_services/logger.service';
import { AddressService } from './services/common_services/address.service';
import { LoginComponent } from './components/authentication_components/login/login.component';
import { SignupComponent } from './components/authentication_components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {AuthService} from './services/common_services/auth.service';
import {MasterService} from './services/common_services/master.service';
import {AuthGuard} from './services/common_services/auth-guard.service';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import { ResetPasswordComponent } from './components/authentication_components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/authentication_components/forgot-password/forgot-password.component';
import { LogoutComponent } from './components/authentication_components/logout/logout.component'
import {confirmEqualPasswordValidator } from './services/common_services/confirm-equal-passwords-validator.directive';
import {BaseComponent} from './components/base_component/base.component';
import { DataTablesModule } from 'angular-datatables';
// import { StateMasterComponent } from './components/los_masters/state-master/state-master.component';
// import { CityMasterComponent } from './components/los_masters/city-master/city-master.component';
// import { DistrictMasterComponent } from './components/los_masters/district-master/district-master.component';
// import { CountryMasterComponent } from './components/los_masters/country-master/country-master.component';
// import { RegionMasterComponent } from './components/los_masters/region-master/region-master.component';
import { BranchComponent } from './components/los_masters/branch/branch.component';
import { SalesmanagerComponent } from './components/los_masters/salesmanager/salesmanager.component';
import { SourcingComponent } from './components/los_masters/sourcing/sourcing.component';
import { SupplierComponent } from './components/los_masters/supplier/supplier.component';
import { ChargecodeComponent } from './components/los_masters/chargecode/chargecode.component'

// import { ManufactureMasterComponent } from './components/los_masters/manufacture-master/manufacture-master.component';
// import { ModelMasterComponent } from './components/los_masters/model-master/model-master.component';
// import { DepartmentMasterComponent } from './components/los_masters/department-master/department-master.component';
// import { BounceReasonMasterComponent } from './components/los_masters/bounce-reason-master/bounce-reason-master.component';
import { ProductComponent } from './components/los_masters/product/product.component';
import { SchemeComponent } from './components/los_masters/scheme/scheme.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { NewLoanComponent } from './components/new-loan/new-loan.component';
import { BranchResolver } from './resolver/branch-resolver.service';
import { SupplierResolver } from './resolver/supplier-resolver.service';
import { ProductResolver } from './resolver/product-resolver.service';
import { SalesManagerResolver } from './resolver/salesmanager-resolver.service'
import { SchemeResolver } from './resolver/scheme-resolver.service'
import { SourceResolver } from './resolver/source-resolver.service'
import { ChargeCodeResolver } from './resolver/chargecode-resolver.service';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatStepperModule,
    MatRadioModule,
    MatExpansionModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatButtonModule,
    HttpModule,
    routing,
    DataTablesModule
    ],
  declarations: [
     LoginComponent,
     SignupComponent,
     DashboardComponent,
     AppComponent,
     ResetPasswordComponent,
     ForgotPasswordComponent,
     LogoutComponent,
     confirmEqualPasswordValidator,
     BaseComponent,
    //  StateMasterComponent,
    //  CityMasterComponent,
    //  DistrictMasterComponent,
    //  CountryMasterComponent,
    //  RegionMasterComponent,
     BranchComponent,
     SalesmanagerComponent,
     SourcingComponent,
     SupplierComponent,
     ChargecodeComponent,
    //  ManufactureMasterComponent,
    //  ModelMasterComponent,
    //  DepartmentMasterComponent,
    //  BounceReasonMasterComponent,
     ProductComponent,
     SchemeComponent,
     UserManagementComponent,
     NewLoanComponent
    ],
  bootstrap: [AppComponent],
  providers:[
    Logger,
    AddressService,
    DashboardService,
    AuthService,
    MasterService,
    AuthGuard,
    BranchResolver,
    SupplierResolver,
    ProductResolver,
    SalesManagerResolver,
    SchemeResolver,
    SourceResolver,
    ChargeCodeResolver
  ]

})
export class AppModule { }
