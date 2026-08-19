import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from './service/auth.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent implements OnInit{
  title = 'front';
  genders = ["Comedia","Animated","Action","Horror"];
  

  constructor(private authService:AuthService){}
  ngOnInit(){

  }
  
  isLogged(){
    return this.authService.isLoggedIn();
  }
  logout(){
    this.authService.logout().subscribe({
      error: ()=>this.authService.clearTokens()
    });
  }
}
