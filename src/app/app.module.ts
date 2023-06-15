import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { FreeModule } from "./free/free.module"
import { AuthService } from "./free/login/auth.service"

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FreeModule,
        FormsModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent],
})
export class AppModule { }
