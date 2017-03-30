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
import {AuthGuard} from "./header/authguard.service";
import {InventoryAddComponent} from "./inventory/inventoryadd.component";
import {OrderService} from "./inventory/order.service";
import {HomeNav} from "./home/homenav.component";
import {InventoryQueryComponent} from "./inventory/inventoryquery.component";
import {InventoryRemoveComponent} from "./inventory/inventoryremove.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        SignupComponent,
        LogoutComponent,
        HomeComponent,
        InventoryAddComponent,
        InventoryQueryComponent,
        InventoryRemoveComponent,
        HomeNav
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule],
    bootstrap: [AppComponent],
    providers: [AuthenticationService, AuthGuard, OrderService]
})
export class AppModule {

}
