import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { country } from '../data/country';
import { patient } from '../data/patient';
import { CountryService } from '../services/country.service';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {

  liCountry!:country[];

  forms!:FormGroup
  // formBuilder!:FormBuilder
  // constructor(_formBuilder:FormBuilder){
  //   this.formBuilder=_formBuilder;
  // }

  constructor(private formBuilder:FormBuilder,
              private countryService:CountryService,
              private patientService:PatientService){}

  ngOnInit(): void {

    this.getAllCountry()
    this.buildForm()

  }

  buildForm(){
    this.forms=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      Phone:['',Validators.required],
      Email:['',Validators.compose([Validators.required,Validators.email])],
      BDate:['',''],
      country:['','']          
    })
  }

  getAllCountry(){
    this.countryService.getAllCountry().subscribe({
      next:data=>{
        debugger
        this.liCountry=data
      },
      error:err=>{
        console.log(err)
      }
    })
  }

  onSave(){
    debugger
    if(this.forms.valid){
    var obj=new patient();
    obj.fName=this.forms.value["firstName"];
    obj.lName=this.forms.value["lastName"];
    obj.email=this.forms.value["Email"];
    obj.phone=this.forms.value["Phone"];
    obj.bDate=this.forms.value["BDate"];
    obj.country_Id=this.forms.value["country"];
    this.patientService.create(obj).subscribe({
      next:data=>{
        alert("save Successfuly")
      },
      error:err=>{
        alert("Error Happned")
      }
    })
    }
  }

}
