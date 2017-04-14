import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { OrderForm } from "./orderform.model";
import { ProductDetails, ProductFlavor } from "./productdetails.model";
import "rxjs/Rx";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()

export class OrderService {

    constructor(private http: Http) { }

    addItems(orderForm: OrderForm) {
        const body = JSON.stringify(orderForm);
        const headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.post('http://localhost:3000/home/add', body, { headers: headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
    removeInventory(orderForm: OrderForm) {
        const body = JSON.stringify(orderForm);
        const headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
        return this.http.post('http://localhost:3000/home/remove', body, { headers: headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
    getFlavors() {
        return this.http.get('http://localhost:3000/home/flavors')
            .map((response: Response) => {
                const flavors = response.json().obj;
                let finalFlavors: ProductFlavor[] = [];
                for (let flavor of flavors) {
                    finalFlavors.push(new ProductFlavor(
                        flavor.flavor
                    ));
                }
                return finalFlavors;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getDetails() {
        return this.http.get('http://localhost:3000/home/details')
            .map((response: Response) => {
                const products = response.json().obj;
                let finalDetails: ProductDetails[] = [];
                for (let product of products) {
                    for (let detail of product.details) {
                        finalDetails.push(new ProductDetails(
                            product.flavor,
                            detail.size,
                            detail.amount,
                            detail.id
                        ));
                    }
                }
                return finalDetails;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    tempAlert(msg, duration) {
        let el = document.createElement("div");
        el.setAttribute("style", "position:absolute;top:40%;left:20%;background-color:white;");
        el.innerHTML = msg;
        setTimeout(function () {
            el.parentNode.removeChild(el);
        }, duration);
        document.body.appendChild(el);
    }

}