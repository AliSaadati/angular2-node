import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./header/login.component";
import {SignupComponent} from "./header/signup.component";
import {LogoutComponent} from "./header/logout.component";
import {HomeComponent} from "./home/home.component";

//
export const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'logout', component: LogoutComponent},
    { path: 'home', component: HomeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);