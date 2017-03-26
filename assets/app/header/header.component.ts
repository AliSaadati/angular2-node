import {Component} from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [`
        .activated {
            background-color: indianred;
        }
`]
})

export class HeaderComponent {

    loggedIn() {
        return true;
    }
}