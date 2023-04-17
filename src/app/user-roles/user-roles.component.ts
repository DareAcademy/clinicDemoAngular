import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserRoles } from '../data/userRoles';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {

  userRoles!:UserRoles[]
  id!:number
  constructor(private activatedRoute:ActivatedRoute,
              private accountService:AccountService){}

  ngOnInit(): void {
    
    if(this.activatedRoute.snapshot.queryParams["Id"] !=undefined){
      this.id =this.activatedRoute.snapshot.queryParams["Id"]
      this.loadRoles()
    }
  }

  loadRoles(){
    this.accountService.getUserRole(this.id).subscribe({
      next:data=>{
        this.userRoles=data
      },
      error:err=>{
        alert("error happned")
      }
    })

  }

  onUpdate(userRoles:UserRoles[]){
    this.accountService.UpdateRole(userRoles).subscribe({
      next:data=>{
        alert("success")
      },
      error:err=>{
        alert("error happned")
      }
    })
  }
}
