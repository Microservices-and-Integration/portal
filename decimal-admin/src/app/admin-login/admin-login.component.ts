import { Component, OnInit } from '@angular/core';
import {AdminLogin} from '../models/login'

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginModel:any;
  submitted:any;
  constructor() { }

  ngOnInit(): void {

    this.adminLoginModel=new AdminLogin("default","");
    this.submitted=false;
    
  }
  onSubmit(){
    //temporary logic
    if(this.submitted){
      this.adminLoginModel.userId="flip"
      
    }
    else{
      this.adminLoginModel.userId="flop";
    }
    this.submitted=!this.submitted;
  }

}
