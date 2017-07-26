import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:string = "";
  pass:string = "";
  err:string="";
  remem:boolean=true;
  
  constructor() { }

  ngOnInit() {
  }

  CheckLogin=(x,y)=>{
    if(x=="Akki" && y=="Akshay"){
      this.login = "";
      this.pass = "";
      this.err = "You are Valid User";
      alert(x+"------->"+y+"------->"+this.remem);
    }
    else{
      this.pass = "";
      alert(x+"------->"+y+"------->"+this.remem);
      this.err = "Invalid User";
    }
    
  }

  loginIdclicked=()=>{
    this.err="";
  }

}
