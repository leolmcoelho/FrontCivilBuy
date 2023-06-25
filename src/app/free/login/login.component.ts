import { Component } from '@angular/core';
import { User } from './user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public user: User = new User();


    constructor(private authService: AuthService) {
        this.user.email = '82170701052';
        this.user.password = 'teste';
    }

    login(): void {
        console.log('click login');
        this.authService.loginUser(this.user.email, this.user.password);
    }

}
