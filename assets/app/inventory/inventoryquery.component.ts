import { ProductDetails, ProductFlavor } from './productdetails.model';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { OrderForm } from "./orderform.model";
import { OrderService } from "./order.service";

@Component({
    selector: "app-inventoryquery",
    templateUrl: "./inventoryquery.component.html"
})

export class InventoryQueryComponent implements OnInit {

    public allDetails: ProductDetails[];
    myForm: FormGroup;
    constructor(private orderService: OrderService) { }

    sort(toSort) {
        switch (toSort) {
            case 0:
                this.allDetails.sort(function (a, b) {
                    return a.amount - b.amount;
                });
                break;
            case 1:
                this.allDetails.sort(function (a, b) {
                    return b.amount - a.amount;
                });
                break;
            case 2:
                this.allDetails.sort(function (a, b) {
                    return a.flavor.localeCompare(b.flavor);
                });
                break;
            case 3:
                this.allDetails.sort(function (a, b) {
                    return b.flavor.localeCompare(a.flavor);
                });
                break;
            case 4:
                this.allDetails.sort(function (a, b) {
                    return a.amount - b.amount;
                });
                break;
            case 5:
                this.allDetails.sort(function (a, b) {
                    return b.amount - a.amount;
                });
                break;
        }
    }

    ngOnInit() {
        this.orderService.getDetails()
            .subscribe(
            (details: ProductDetails[]) => {
                this.allDetails = details;
            });
        console.log(this.allDetails);
    }
}