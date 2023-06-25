import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from "@angular/forms"

import { LoginComponent } from './login/login.component'

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        MatSlideToggleModule,
        FormsModule,
        HttpClientModule
    ],
    exports: [LoginComponent],
})
export class FreeModule {}
