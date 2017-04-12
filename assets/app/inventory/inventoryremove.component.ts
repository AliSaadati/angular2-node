import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {OrderForm} from "./orderform.model";
import {RemovalForm} from "./removalform.model";
import {OrderService} from "./order.service";

@Component({
    selector: "app-inventoryremove",
    templateUrl: "./inventoryremove.component.html"
})

export class InventoryRemoveComponent implements OnInit{
    items: RemovalForm[];
    myForm: FormGroup;

    constructor (private orderService: OrderService) {}

    // onSubmit() {
    //     const orderForm = new OrderForm(
    //         this.myForm.value.flavor,
    //         "1",
    //         this.myForm.value.amount
    //     );
    //     this.orderService.addItems(orderForm)
    //         .subscribe(
    //             data => console.log(data),
    //             error => console.log(error)
    //         );
    //     this.myForm.reset();
    // }

    ngOnInit() {

        // FormGroup consolidates all controls into one object
        this.myForm = new FormGroup({
            flavor: new FormControl(null, Validators.required),
            size: new FormControl(),
            amount: new FormControl(null, Validators.required)
        });
        
        {
        this.orderService.getItems()
            .subscribe(
                (items: RemovalForm[]) => {
                    this.items = items;
                }
            );
    }

    }
}