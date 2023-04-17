import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignIn } from '../data/signin';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forms!:FormGroup

  constructor(private formBuilder:FormBuilder,
             private accountService:AccountService,
             private router:Router
             ){}

  ngOnInit(): void {
    this.buildForm()
  }

    buildForm(){
    this.forms=this.formBuilder.group({
      email:[,Validators.compose([Validators.required,Validators.email])],
      password:[,Validators.required],
    })
  }

  onLogin(){
    debugger
    if(this.forms.valid){
      
      var user=new SignIn()
      user.username=this.forms.value["email"];
      user.password=this.forms.value["password"]

      this.accountService.SignIn(user).subscribe({
        next:data=>{
        debugger

        localStorage.setItem("userToken",data.token)
          this.router.navigate(['/home/newPatient'])


        },
        error:err=>{
          alert("Error happned")
        }
      })
      
    }
  }
}
