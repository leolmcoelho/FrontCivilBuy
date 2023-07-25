import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { FreeModule } from "./free/free.module"
import { AuthService } from "./service/auth.service"
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AdminModule } from "./admin/admin.module";
import { GeneralModule } from "./general/general.module"



@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FreeModule,
        FormsModule,
        SharedModule,
        MatIconModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AdminModule,
        GeneralModule

        //LoginComponent
    ],
    providers: [AuthService],
    bootstrap: [AppComponent],
})
export class AppModule { }
