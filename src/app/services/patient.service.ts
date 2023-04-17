import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { patient } from '../data/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  baseUrl='';
  constructor(private httpClient:HttpClient ) {
    this.baseUrl=environment.APIUrl +'/api/Patient'
   }

  create(Patient:patient):Observable<any>{
    debugger
    // let userToekn= localStorage.getItem("userToken")

    // const httpOptions={
    //   headers:new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     Authorization:`Bearer   ${userToekn}`,
    //   })
    // }
  //  return this.httpClient.post("http://localhost/ClinicDemoAPI1112/api/Patient",Patient);
  return this.httpClient.post(this.baseUrl,Patient);

  }

  search(name:string):Observable<any>{

    // let userToekn= localStorage.getItem("userToken")
    // const httpOptions={
    //   headers:new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     Authorization:`Bearer   ${userToekn}`,
    //   })
    // }
    return this.httpClient.get(this.baseUrl+'/search?name='+name);
  //  return this.httpClient.get("http://localhost/ClinicDemoAPI1112/api/Patient/search?name="+name);
  }
}
