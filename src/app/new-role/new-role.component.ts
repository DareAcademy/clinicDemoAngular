import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from '../data/role';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.css']
})
export class NewRoleComponent implements OnInit {

  forms!:FormGroup

  constructor(private formBuilder:FormBuilder,
              private accountService:AccountService){}
  ngOnInit(): void {
  this.buildForm()  
  }

  buildForm(){
    this.forms=this.formBuilder.group({
      name:[,Validators.required]
    })
  }

  onSave(){
    if(this.forms.valid){
      var newRole=new Role();
      newRole.name=this.forms.value["name"]
      this.accountService.newRole(newRole).subscribe({
        next:data=>{
          alert("successfully")
        },
        error:err=>{
          alert("error happned")
        }
      })
    }
  }
}
