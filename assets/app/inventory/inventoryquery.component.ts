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
    private flag: Boolean;
    public allDetails: ProductDetails[];
    myForm: FormGroup;
    constructor(private orderService: OrderService) { }

    sort(toSort) {
        switch (toSort) {
            case "0":
                this.allDetails.sort(function (a, b) {
                    return a.flavor.localeCompare(b.flavor);
                });
                this.flag = true;

                break;
            case "1":
                this.allDetails.sort(function (a, b) {
                    return b.flavor.localeCompare(a.flavor);
                });
                this.flag = true;

                break;
                //TODO: create ENUM for detail sizes
            case "2":
                this.allDetails.sort(function (a, b) {
                    return a.size.localeCompare(b.size);
                });
                this.flag = true;

                break;
            case "3":
                this.allDetails.sort(function (a, b) {
                    return b.size.localeCompare(a.size);
                });
                this.flag = true;

                break;
            case "4":
                this.allDetails.sort(function (a, b) {
                    return a.amount - b.amount;
                });
                this.flag = true;

                break;

            case "5":
                this.allDetails.sort(function (a, b) {
                    return b.amount - a.amount;
                });
                this.flag = true;
                break;

            case "6":
                // TODO: add date detail
                if (!this.flag) break;
                this.allDetails.sort(function (a, b) {
                    return b.amount - a.amount;
                });
                break;
        }
        console.log("This is: " + toSort);
    }

    ngOnInit() {
        this.orderService.getDetails()
            .subscribe(
            (details: ProductDetails[]) => {
                this.allDetails = details;
            });
    }
}