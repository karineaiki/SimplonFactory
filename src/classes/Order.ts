import { Customer } from "./Customer";
import { Product } from "./Product";

export class Order {
    constructor (public orderId: number, public customer: Customer, public productsList: Product[], public orderDate: Date) {};

    addProduct(product: Product) {
     this.productsList.push
    };

    removeProduct(productId: number) {
        this.productsList.filter(product => product.productId !== productId)
    }

    calculateWeight() {
        this.productsList.reduce((total, product) => total + product.weight, 0)
    }

    calculateTotal() {
        const totalPrice = this.productsList.reduce((total, product) => total + product.price, 0)
        return `${totalPrice}`
    }

    displayOrder() {
        this.customer.displayInfo
        this.productsList.forEach(product => {
            return `${this.productsList}` + `${this.calculateTotal}`

            //TODO : vérifier comment retourner la liste
        });
    }
}

