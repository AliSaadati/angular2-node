
import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {User} from "./user.model";
import "rxjs/Rx";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()

export class AuthenticationService {
    constructor (private http: Http) {}

    signup(user: User) {
        const body = JSON.stringify(user);
        const  headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
        return this.http.post('https://inventory-manage.herokuapp.com/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) =>  Observable.throw(error.json()));
    }

    login(user: User) {
        const body = JSON.stringify(user);
        const  headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
        return this.http.post('https://inventory-manage.herokuapp.com//user/login', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');

    }
}
