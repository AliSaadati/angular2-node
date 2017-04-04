import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "./authentication.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [`

        .activated {
            background-color: indianred;
        }
        a:hover {
            cursor:pointer;
        }
`]
})

export class HeaderComponent {
    
    constructor(private router: Router, private authService: AuthenticationService) {}

    loggedIn() {
        return localStorage.getItem('token') !== null;
    }

    onLogout() {
        this.authService.logout();
        this.router.navigate(['login']);
    }
}