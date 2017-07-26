import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Login:string="active";
  New_User:string;

  linkClick=(i)=>{
    if(i==0){
      this.Login = "active";
      this.New_User = "xyz";
    }
    else{
      this.Login = "xyz";
      this.New_User = "active";
    }
  }

}
