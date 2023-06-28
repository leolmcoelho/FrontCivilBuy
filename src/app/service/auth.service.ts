import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userAuth: boolean = true;
  

  constructor(private http: HttpClient, private router: Router) { }
  
  /*
  initialize(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.http.get<any>('controller/user').pipe(
        map((response) => {
          const userLevel = response.userLevel;
          this.userAuth = userLevel !== 'public';
          return this.userAuth;
        })
      ).subscribe(
        (userAuth) => {
          localStorage.setItem('Auth', userAuth.toString());
          resolve(userAuth);
        },
        (error) => {
          console.error('An error occurred during user initialization', error);
          reject(error);
        }
      );
    });
  }*/

  loginUser(user: string, pw: string): void {
    const form = new FormData();
    form.set('user', user);
    form.set('pw', pw);
    form.set('token', 'false');

    this.sendLoginRequest(form);
  }

  private sendLoginRequest(form: FormData): void {
    this.http.post<any>('/controller/login', form).subscribe(
      response => {
        console.log(response);
        if (response.success) {
          // Login bem-sucedido
          console.log('Login bem-sucedido');
          this.userAuth = true;
          localStorage.setItem('Auth', 'true');
          this.router.navigate(['/']);
        } else {
          // Login falhou
          console.log('Login falhou');
          this.userAuth = false;
          localStorage.setItem('Auth', 'false');
        }
      },
      error => {
        // Erro durante o login
        console.error('Ocorreu um erro durante o login', error);
      }
    );
  }

  public logout(): void {
    this.http.post<any>('/controller/logout', {}).subscribe(
      response => {
        console.log(response);
        if (response.success) {
          // Logout successful
          console.log('Logout successful');
          this.userAuth = false;
          localStorage.setItem('Auth', 'false');
          this.router.navigate(['/login']);
        } else {
          // Logout failed
          console.log('Logout failed');
        }
      },
      error => {
        // Error during logout
        console.error('An error occurred during logout', error);
      }
    );
  }

  public isAuthenticated(): boolean {
    //const userAuth = localStorage.getItem('Auth') === 'true';
    const userAuth = true;
    return userAuth;
  }
}
