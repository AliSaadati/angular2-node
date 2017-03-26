import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {HeaderComponent} from "./header/header.component";
import {LoginComponent} from "./header/login.component";
import {SignupComponent} from "./header/signup.component";
import {routing} from "./app.routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LogoutComponent} from "./header/logout.component";
import {HomeComponent} from "./home/home.component";
import {AuthenticationService} from "./header/authentication.service";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        SignupComponent,
        LogoutComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule],
    bootstrap: [AppComponent],
    providers: [AuthenticationService]
})
export class AppModule {

}
