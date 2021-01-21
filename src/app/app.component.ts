import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'front';
  genders = ["Comedia","Animated","Action","Horror"];
  

  constructor(private authService:AuthService){}
  ngOnInit(){

  }
  
  showToken(){
    let token = this.authService.getToken();
    console.log(token);
  }
  logout(){
    localStorage.removeItem("token");
  }
}
