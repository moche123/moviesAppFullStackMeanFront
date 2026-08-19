import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from './service/auth.service';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatDrawerContainer, MatDrawer } from '@angular/material/sidenav';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatToolbar, MatIconButton, MatIcon, RouterLink, MatDrawerContainer, MatDrawer, RouterOutlet]
})
export class AppComponent {
  title = 'front';
  readonly isLogged = this.authService.isLoggedIn;

  constructor(private authService:AuthService){}

  logout(){
    this.authService.logout().subscribe({
      error: ()=>this.authService.clearTokens()
    });
  }
}
