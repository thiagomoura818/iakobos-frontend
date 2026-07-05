import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../../core/services/auth-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  private authService = inject(AuthService);

  protected isLoggedIn = this.authService.isAuthenticated;

  logout(){
    this.authService.logout();
  }

}
