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
    selectedDetail: ProductDetails = new ProductDetails("1", "1", 1);
    selectedFlavor: ProductFlavor = new ProductFlavor("hello");

    constructor(private orderService: OrderService) {
    }


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
            flavor: new FormControl(),
            size: new FormControl(),
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
    showdetail() {
        console.log(this.selectedDetail);
    }

    setDetail(item) {
        this.selectedDetail.amount = item;
    }
}