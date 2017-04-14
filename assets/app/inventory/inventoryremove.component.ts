import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {OrderForm} from "./orderform.model";
import {ProductDetails, ProductFlavor} from "./productdetails.model";
import {OrderService} from "./order.service";

@Component({
    selector: "app-inventoryremove",
    templateUrl: "./inventoryremove.component.html"
})

export class InventoryRemoveComponent implements OnInit {
    flavors: ProductFlavor[];
    details: ProductDetails[];
    allDetails: ProductDetails[];
    myForm: FormGroup;
    selectedDetail: ProductDetails = new ProductDetails(null, null, null);

    constructor(private orderService: OrderService) {
    }

    ngOnInit() {

        // FormGroup consolidates all controls into one object
        this.myForm = new FormGroup({
            flavor: new FormControl(Validators.required),
            size: new FormControl(Validators.required),
            amount: new FormControl()
        });

        this.orderService.getFlavors()
            .subscribe(
                (flavors: ProductFlavor[]) => {
                    this.flavors = flavors;
                });

        this.orderService.getDetails()
            .subscribe(
            (details: ProductDetails[]) => {
                this.allDetails = details;
            });
    }

    onSelect(flavor) {
        this.details = this.allDetails.filter((item) => item.flavor == flavor );
    }

    onSubmit() {
        const orderForm = new OrderForm(
            this.myForm.value.flavor,
            this.selectedDetail.size,
            this.myForm.value.amount
        );
        this.orderService.addItems(orderForm)
            .subscribe(
                data => this.orderService.tempAlert(data.message, 2500),
                error => this.orderService.tempAlert(error.message, 2500)
            );
    }

    setDetail(){
        console.log(this.selectedDetail);
    }



}