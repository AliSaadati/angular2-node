export class ProductDetails {

    constructor(public flavor: string,
                public size: string,
                public amount: number,
                public id?: string){
    }
}

export class ProductFlavor {

    constructor(public name: string){}

}