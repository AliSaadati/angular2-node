import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {OrderForm} from "./orderform.model";
import {OrderService} from "./order.service";

@Component({
    selector: "app-inventoryadd",
    templateUrl: "./inventoryadd.component.html"
})

export class InventoryAddComponent implements OnInit{

    myForm: FormGroup;
    constructor (private orderService: OrderService) {}

    onSubmit() {
        const orderForm = new OrderForm(
            this.myForm.value.flavor,
            this.myForm.value.size,
            this.myForm.value.amount
        );
        this.orderService.addItems(orderForm)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
        this.myForm.reset();
    }

    ngOnInit() {

        // FormGroup consolidates all controls into one object
        this.myForm = new FormGroup({
            flavor: new FormControl(null, Validators.required),
            size: new FormControl(null, Validators.required),
            amount: new FormControl(null, Validators.required)
        });
    }
}