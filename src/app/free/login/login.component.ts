import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
  
export class LoginComponent {
  
  public user: User = new User();


  constructor(private authService: AuthService) {
    
  }

  login(){
    this.authService.authenticate(this.user.email,  this.user.password)
    // Lógica de login aqui
    //console.log('Email:', this.email);
    //console.log('Senha:', this.password);
    //console.log(this.user);
    //console.log('Email:', this.user.email);
    //console.log('Senha:', this.user.password);
    // Adicione a lógica de autenticação ou envio de dados para a API aqui    
  }
}
