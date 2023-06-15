import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        const isAuthenticated = this.authService.isAuthenticated();



        if (isAuthenticated) {
            // Usuário autenticado, permitir acesso
            return true;
        } else {
            // Usuário não autenticado, redirecionar para a página de login
            return this.router.parseUrl('/login'); // Redireciona para a página de login
        }
    }
}
