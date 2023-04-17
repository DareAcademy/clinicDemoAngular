import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUp } from '../data/signup';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  forms!:FormGroup

  constructor(private formBuilder:FormBuilder, private accountService:AccountService){}


  ngOnInit(): void {
    this.buildForm()  
  }

  buildForm(){
    this.forms=this.formBuilder.group({
      name:[,Validators.required],
      gender:[,Validators.required],
      email:[,Validators.compose([Validators.required,Validators.email])],
      password:[,Validators.required],
      confirmPassword:[,Validators.required]
    })
  }


  onSignUp(){
    debugger
    if(this.forms.valid){

      // var user=new SignUp();
      // user=this.forms.value;
      var user=new SignUp();
      user.name=this.forms.value["name"];
      user.email=this.forms.value["email"];
      user.gender=this.forms.value["gender"];
      user.password=this.forms.value["password"];
      user.confirmPassword=this.forms.value["confirmPassword"];

      this.accountService.createAccount(user).subscribe({
        next:data=>{
          alert("Save Successfully")
        },
        error:err=>{
          alert("error happned")
        }
      })
    }
  }
}
