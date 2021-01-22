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
  
  isLogged(){
    let token  = localStorage.getItem("token") || null
    let size = token?.length
    
    if(size && size>0 && token!=null){
      return true
    }
    else{
      return false
    }
   
  }
  logout(){
    localStorage.removeItem("token");
    this.authService.logged =false
  }
}
