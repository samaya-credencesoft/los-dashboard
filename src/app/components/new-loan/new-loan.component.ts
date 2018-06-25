import { Component, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'new-loan',
  templateUrl: './new-loan.component.html',
  styles: [`h1 { font-family: Lato; }`],
  styleUrls: ['./new-loan.component.css']
})
export class NewLoanComponent  {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;


  collateralTypeProperty : boolean = true;
  collateralTypeCash : boolean = true;
  collateralTypeFixedDeposite : boolean = true;
  collateralTypeMutualFund : boolean = true;
  collateralTypeAsset : boolean = true;

  customerTypeIndividual : boolean = true;
  customerTypeCorporate : boolean = true;

  applicant_firstAddressDetails : boolean = true;
  applicant_secondAddressDetails : boolean = true;




  applicant_step = 0;

  applicantSetStep(index: number) {
    this.applicant_step = index;
  }

  applicantAddressNextStep() {
    this.applicant_step++;
  }

  applicantAddressPrevStep() {
    this.applicant_step--;
  }



  co_applicant_step = 0;

  coApplicantSetStep(index: number) {
    this.co_applicant_step = index;
  }

  coApplicantAddressNextStep() {
    this.co_applicant_step++;
  }

  coApplicantAddressPrevStep() {
    this.co_applicant_step--;
  }




  applicant_employment_step = 0;

  applicantEmploymentSetStep(index: number) {
    this.applicant_employment_step = index;
  }

  applicantEmploymentDetailsNextStep() {
    this.applicant_employment_step++;
  }

  applicantEmploymentDetailsPrevStep() {
    this.applicant_employment_step--;
  }


  co_applicant_employment_step = 0;

  coApplicantEmploymentSetStep(index: number) {
    this.co_applicant_employment_step = index;
  }

  coApplicantEmploymentDetailsNextStep() {
    this.co_applicant_employment_step++;
  }

  coApplicantEmploymentDetailsPrevStep() {
    this.co_applicant_employment_step--;
  }



  reference_details_step = 0;

  referenceSetStep(index: number) {
    this.reference_details_step = index;
  }

  referenceNextStep() {
    this.reference_details_step++;
  }

  referencePrevStep() {
    this.reference_details_step--;
  }
  


  collateralDataChange (collateralDataValue){

    if(collateralDataValue == "Property"){
      this.collateralTypeProperty = false;
      this.collateralTypeCash = true;
      this.collateralTypeFixedDeposite = true;
      this.collateralTypeMutualFund = true;
      this.collateralTypeAsset = true;
    }else if(collateralDataValue == "Cash"){
      this.collateralTypeProperty = true;
      this.collateralTypeCash = false;
      this.collateralTypeFixedDeposite = true;
      this.collateralTypeMutualFund = true;
      this.collateralTypeAsset = true;
    }else if(collateralDataValue == "Fixed_Diposit"){
      this.collateralTypeProperty = true;
      this.collateralTypeCash = true;
      this.collateralTypeFixedDeposite = false;
      this.collateralTypeMutualFund = true;
      this.collateralTypeAsset = true;
    }else if(collateralDataValue == "Mutual_Fund"){
      this.collateralTypeProperty = true;
      this.collateralTypeCash = true;
      this.collateralTypeFixedDeposite = true;
      this.collateralTypeMutualFund = false;
      this.collateralTypeAsset = true;
    }else if(collateralDataValue == "Asset"){
      this.collateralTypeProperty = true;
      this.collateralTypeCash = true;
      this.collateralTypeFixedDeposite = true;
      this.collateralTypeMutualFund = true;
      this.collateralTypeAsset = false;
    }

  }


  customerDataChange (customerDataValue){

    if(customerDataValue == "Individual"){
      this.customerTypeIndividual = false;
      this.customerTypeCorporate = true;
      
    }else if(customerDataValue == "Corporate"){
      this.customerTypeIndividual = true;
      this.customerTypeCorporate = false;
      
    }

  }

  applicantAddressChange (){
    
        this.applicant_firstAddressDetails = true;
        this.applicant_secondAddressDetails = !this.applicant_secondAddressDetails;
        this.applicant_firstAddressDetails = !this.applicant_firstAddressDetails;
  }

//   applicantAddressChange2 (){
    
//     this.applicant_secondAddressDetails = true;
//     this.applicant_firstAddressDetails = !this.applicant_firstAddressDetails;
  

// }




  constructor(private _formBuilder: FormBuilder){

  }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
    this.sixthFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required]
    });

  }
}
