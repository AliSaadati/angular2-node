import {Injectable, EventEmitter} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {OrderForm} from "./orderform.model";
import "rxjs/Rx";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()

export class OrderService {

    constructor (private http: Http) {}

    addItems(orderForm: OrderForm){
        const body = JSON.stringify(orderForm);
        const  headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
        return this.http.post('http://localhost:3000/home/add', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

}