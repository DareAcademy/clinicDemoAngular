import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { NewCountryComponent } from './new-country/new-country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule,HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { ErrorHandleInterceptor } from './interceptors/error-handle.interceptor';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPatientComponent,
    PatientListComponent,
    NewCountryComponent,
    CountryListComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    NewRoleComponent,
    UserListComponent,
    UserRolesComponent,
    Error404Component,
    Error500Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthenticationInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorHandleInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
