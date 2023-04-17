import { Component, ElementRef, ViewChild } from '@angular/core';
import { patient } from '../data/patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent {

  liPatient!:patient[]

  @ViewChild('txtsearchName') searchName!:ElementRef;
  constructor(private patientService:PatientService){}
  

  onSearch(){
    debugger
    console.log(this.searchName.nativeElement.value)
    this.patientService.search(this.searchName.nativeElement.value).subscribe({
      next:data=>{
        debugger
        this.liPatient=data
      },
      error:err=>{
        alert("error")
      }
    })

  }
}
