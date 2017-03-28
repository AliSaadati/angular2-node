import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "./authentication.service";
@Component ({
    selector: 'app-logout',
    templateUrl: './logout.component.html'
})
export class LogoutComponent {
    constructor(private router: Router, private authService: AuthenticationService) {}

    onLogout() {
        this.authService.logout();
        this.router.navigate(['login']);
    }
}