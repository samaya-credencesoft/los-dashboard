import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './components/authentication_components/login/login.component';
import {AuthGuard} from './services/common_services/auth-guard.service';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SignupComponent} from './components/authentication_components/signup/signup.component';
import {ResetPasswordComponent} from './components/authentication_components/reset-password/reset-password.component';
import {ForgotPasswordComponent} from './components/authentication_components/forgot-password/forgot-password.component';
import { LogoutComponent } from './components/authentication_components/logout/logout.component';
import { BaseComponent } from './components/base_component/base.component';
// Master Components
// import { StateMasterComponent } from './components/los_masters/state-master/state-master.component';
// import { CityMasterComponent } from './components/los_masters/city-master/city-master.component';
// import { DistrictMasterComponent } from './components/los_masters/district-master/district-master.component';
// import { CountryMasterComponent } from './components/los_masters/country-master/country-master.component';
// import { RegionMasterComponent } from './components/los_masters/region-master/region-master.component';
import { BranchComponent } from './components/los_masters/branch/branch.component';
import { SalesmanagerComponent } from './components/los_masters/salesmanager/salesmanager.component';
import { SourcingComponent } from './components/los_masters/sourcing/sourcing.component';
import { SupplierComponent } from './components/los_masters/supplier/supplier.component';
// import { ManufactureMasterComponent } from './components/los_masters/manufacture-master/manufacture-master.component';
// import { ModelMasterComponent } from './components/los_masters/model-master/model-master.component';
// import { DepartmentMasterComponent } from './components/los_masters/department-master/department-master.component';
// import { BounceReasonMasterComponent } from './components/los_masters/bounce-reason-master/bounce-reason-master.component';
import { ProductComponent } from './components/los_masters/product/product.component';
import { SchemeComponent } from './components/los_masters/scheme/scheme.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { NewLoanComponent } from './components/new-loan/new-loan.component';
import { BranchResolver } from './resolver/branch-resolver.service'
import { SupplierResolver } from './resolver/supplier-resolver.service'
import { ProductResolver } from './resolver/product-resolver.service'
import { SalesManagerResolver } from './resolver/salesmanager-resolver.service'
import { SchemeResolver } from './resolver/scheme-resolver.service'
import { SourceResolver } from './resolver/source-resolver.service'


const appRoutes: Routes = [
    
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'baseComponent',
        component: BaseComponent
    },
    {
        path: 'newLoan',
        component: NewLoanComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path:  'resetPassword/:*',
        component: ResetPasswordComponent
    },
    {
        path: 'forgotPassword',
        component: ForgotPasswordComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    // {
    //     path: 'stateMaster',
    //     component: StateMasterComponent
    // },
    // {
    //     path: 'cityMaster',
    //     component: CityMasterComponent
    // },
    // {
    //     path: 'districtMaster',
    //     component: DistrictMasterComponent
    // },
    // {
    //     path: 'countryMaster',
    //     component: CountryMasterComponent
    // },
    // {
    //     path: 'regionMaster',
    //     component: RegionMasterComponent
    // },
    {
        path: 'branchMaster',
        component: BranchComponent,
        resolve : {
            brares:BranchResolver
        },
    },
    {
        path: 'salesmanagerMaster',
        component: SalesmanagerComponent,
        resolve : {
            brares:SalesManagerResolver
        },
    },
    {
        path: 'sourcingMaster',
        component: SourcingComponent,
        resolve : {
            brares:SourceResolver
        },
    },
    {
        path: 'supplierMaster',
        component: SupplierComponent,
        resolve : {
            brares:SupplierResolver
        },
    },
    // {
    //     path: 'manufactureMaster',
    //     component: ManufactureMasterComponent
    // },
    // {
    //     path: 'modelMaster',
    //     component: ModelMasterComponent
    // },
    // {
    //     path: 'departmentMaster',
    //     component: DepartmentMasterComponent
    // },
    // {
    //     path: 'bounceResonMaster',
    //     component: BounceReasonMasterComponent
    // },
    {
        path: 'productMaster',
        component: ProductComponent,
        resolve : {
            brares:ProductResolver
        },
    },
    {
        path: 'schemeMaster',
        component: SchemeComponent,
        resolve : {
            brares:SchemeResolver
        },
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'userManagement',
        component: UserManagementComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{onSameUrlNavigation: 'reload'});
