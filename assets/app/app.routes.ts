import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./header/login.component";
import {SignupComponent} from "./header/signup.component";
import {LogoutComponent} from "./header/logout.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./header/authguard.service";
//
export const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'logout', component: LogoutComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];

export const routing = RouterModule.forRoot(APP_ROUTES);