import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  baseUrl=''

  constructor(private httpClient:HttpClient) { 

    this.baseUrl=environment.APIUrl +'/api/Country'

  }

  getAllCountry():Observable<any>{
    debugger
    // let userToekn= localStorage.getItem("userToken")

    // const httpOptions={
    //   headers:new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     Authorization:`Bearer ${userToekn}`,
    //   })
    // }


   //return this.httpClient.get("http://localhost/ClinicDemoAPI1112/api/Country/getAll");

   return this.httpClient.get(this.baseUrl+ '/getAll');
  }
}
