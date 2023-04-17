import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewCountryComponent } from './new-country/new-country.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { SignupComponent } from './signup/signup.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRolesComponent } from './user-roles/user-roles.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'error404',component:Error404Component},
  {path:'error500',component:Error500Component},
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthenticationGuard] ,children:[
    {path:'newPatient',component:NewPatientComponent},
    {path:'patientList',component:PatientListComponent},
    {path:'newCountry',component:NewCountryComponent},
    {path:'countryList',component:CountryListComponent},
    {path:'signup',component:SignupComponent},
    {path:'newRole',component:NewRoleComponent},
    {path:'userList',component:UserListComponent},
    {path:'userRoles',component:UserRolesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
