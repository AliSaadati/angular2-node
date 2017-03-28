import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {User} from "./user.model";
import {Headers, Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";
@Component ({
    selector: "app-login",
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    message: String;
    myForm: FormGroup;
    constructor(private router: Router, private authService: AuthenticationService){}

    onSubmit() {
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password
        );
        this.authService.login(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/home');
                }
            );
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null,
            [Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
        this.message = 'Hi';
    }
}