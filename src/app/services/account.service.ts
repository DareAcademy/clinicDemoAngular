import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../data/role';
import { SignIn } from '../data/signin';
import { SignUp } from '../data/signup';
import { UserRoles } from '../data/userRoles';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }

  createAccount(user:SignUp):Observable<any>{
    return this.httpClient.post("http://localhost/ClinicDemoAPI1112/api/Accounts/SignUP",user)
  }

  SignIn(user:SignIn):Observable<any>{
    return this.httpClient.post("http://localhost/ClinicDemoAPI1112/api/Accounts/Login",user)
  }

  newRole(role:Role):Observable<any>{
    return this.httpClient.post("http://localhost/ClinicDemoAPI1112/api/Accounts/AddRole",role)
  }

  userList():Observable<any>{
    return this.httpClient.get("http://localhost/ClinicDemoAPI1112/api/Accounts/UserList")
  }

  getUserRole(userId:number):Observable<any>{
    return this.httpClient.get("http://localhost/ClinicDemoAPI1112/api/Accounts/UserRoles?UserId="+userId)
  }

  UpdateRole(userRoles:UserRoles[]):Observable<any>{
    return this.httpClient.post("http://localhost/ClinicDemoAPI1112/api/Accounts/UpdateRole",userRoles)
  }
}
