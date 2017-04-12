import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {OrderForm} from "./orderform.model";
import {ProductDetails, ProductFlavor} from "./productdetails.model";
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

    getFlavors(){
        return this.http.get('http://localhost:3000/home/flavors')
        .map((response: Response) => {
            const flavors = response.json().obj;
            let  finalFlavors: ProductFlavor[] = [];
            for (let flavor of flavors) {
                finalFlavors.push(new ProductFlavor(
                   flavor.flavor
                ));
            }
            return finalFlavors;
        })
            .catch((error: Response) => Observable.throw(error.json()));
    }


}