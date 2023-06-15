import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router,  CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']); // Redireciona para a página de dashboard
      return false;
    } else {
      return true;
    }
  }
  
}
