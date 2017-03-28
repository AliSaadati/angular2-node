
import {Injectable, EventEmitter} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {User} from "./user.model";
import "rxjs/Rx";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()

export class AuthenticationService {
    constructor (private http: Http) {}

   private locationWatcher = new EventEmitter();

    signup(user: User) {
        const body = JSON.stringify(user);
        const  headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
        return this.http.post('http://localhost:3000/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) =>  Observable.throw(error.json()));
    }

    login(user: User) {
        const body = JSON.stringify(user);
        const  headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
        return this.http.post('http://localhost:3000/user/login', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    isAuthenticated() {
        return localStorage.getItem('token') != null;
    }

        public subscribe(onNext: (value: any) => void, onThrow?: (exception: any) => void, onReturn?: () => void) {
        return this.locationWatcher.subscribe(onNext, onThrow, onReturn);
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');

    }
}
