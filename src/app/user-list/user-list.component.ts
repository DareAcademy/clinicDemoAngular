import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../data/users';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  liUsers!:Users[]

  constructor(private accountService:AccountService,
              private router:Router){}
  
  ngOnInit(): void {
    this.getUserList()  
  }

  getUserList(){

    this.accountService.userList().subscribe({
      next:data=>{
        this.liUsers=data
      },
      error:err=>{
        alert("error happned")
      }
    })

  }

  onGetUserRole(userId:number){
    this.router.navigate(['home/userRoles'],{queryParams:{Id:userId}})
    

  }
}
