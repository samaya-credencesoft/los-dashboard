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


  collateralTypeProperty : boolean = true;
  collateralTypeCash : boolean = true;
  collateralTypeFixedDeposite : boolean = true;
  collateralTypeMutualFund : boolean = true;

  customerTypeIndividual : boolean = true;
  customerTypeCorporate : boolean = true;

  firstAddressDetails : boolean = true;
  secondAddressDetails : boolean = true;

  
  collateralDataChange (collateralDataValue){

    if(collateralDataValue == "Property"){
      this.collateralTypeProperty = false;
      this.collateralTypeCash = true;
      this.collateralTypeFixedDeposite = true;
      this.collateralTypeMutualFund = true;
    }else if(collateralDataValue == "Cash"){
      this.collateralTypeProperty = true;
      this.collateralTypeCash = false;
      this.collateralTypeFixedDeposite = true;
      this.collateralTypeMutualFund = true;
    }else if(collateralDataValue == "Fixed_Diposit"){
      this.collateralTypeProperty = true;
      this.collateralTypeCash = true;
      this.collateralTypeFixedDeposite = false;
      this.collateralTypeMutualFund = true;
    }else if(collateralDataValue == "Mutual_Fund"){
      this.collateralTypeProperty = true;
      this.collateralTypeCash = true;
      this.collateralTypeFixedDeposite = true;
      this.collateralTypeMutualFund = false;
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

  addressChange (){
    
        this.firstAddressDetails = false;
        this.secondAddressDetails = false;    
      
    
  }



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

  }
}
