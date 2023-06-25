import { Component, Input } from '@angular/core';
import { AuthService } from './service/auth.service';
import { MatSidenav } from '@angular/material/sidenav';
import { trigger, transition, style, animate } from '@angular/animations';
import { fadeInOutAnimation } from './fade-in-out.animation';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOutAnimation]
})
export class AppComponent {
  title = 'frontCivilBuy';
  menuOpen = false;
  isLoading = false;

  constructor(public authService: AuthService) { }

  handleMenuToggle(): void {
    this.menuOpen = !this.menuOpen;
  }

  handleItemSelected(): void {
    this.menuOpen = false;
  }
}
