//Pour construire la classe Order, il faut importer Delivrable, une interface qui comprend estimateDeliveryTime et CalculShippingFee, qui eux-même sont utilisés dans les méthodes StandardDelivery et ExpressDelivery implémentés à Deliverable
//nous avons besoin de récupérer les informations de Customer et de Product
import { Deliverable } from "../interfaces/Deliverable";
import { Customer } from "./Customer";
import { Product } from "./Product";

export class Order {
    //Deliverable ne rentre pas dans le constructeur
    delivery: Deliverable | undefined
    //la class Order prends en arguments un orderId, un customer(qui prends les paramètres de Customer), un productList qui prends en paramètre un tableau de Product un un orderDate
    constructor (public orderId: number, public customer: Customer, public productsList: Product[], public orderDate: Date) {};

    // Utilise .push pour ajouter un produit à la ProductList
    addProduct(product: Product) {
     this.productsList.push(product)
    };

    //utilise .filter pour supprimer un élément de productsList
    removeProduct(productId: number) {
        this.productsList.filter(product => product.productId !== productId)
    }

    //calculateWeight() utilise .reduce pour calculer le total des product.weight. "0" indique le poids quand il n'y a pas de produits dans la porductsList
    calculateWeight():number {
        const totalWeight = this.productsList.reduce((total, product) => total + product.weight, 0)
        return totalWeight
    }


    //utilise le même fonctionnement que calculateWeight pour le calculateTotal
    calculateTotal() {
        const totalPrice = this.productsList.reduce((total, product) => total + product.price, 0)
        return `${totalPrice}`
    }


    //permet d'assigner un service de livraison à la commande (StandardOrder ou ExpressOrder)
    setDelivery(delivery: Deliverable) {
        this.delivery = delivery
    }

    //utilise la méthode calculateShippingFee de l'objet delivery pour calculer les frais de livraison en fonction du poids
    calculateShippingCosts () {    
        const shippingCosts = this.delivery?.calculateShippingFee(this.calculateWeight())
        return `Le coût de votre envoi est de : ${shippingCosts}€`
    }

    //Utilise la méthode estimateDeliveryTime de l'objet delivery pour estimer le délai de livraison de la commande.
    estimateDeliveryTime () {
        const deliveryTime = this.delivery?.estimateDeliveryTime(this.calculateWeight())
        return `Vous recevrez votre colis dans : ${deliveryTime} jours`
    }

    //retourne les informations du customer, sa productsList, l'heure de la commande, le coût d'envoi et le délais de livraison
    displayOrder() {
        console.log (this.customer.displayInfo())
        this.productsList.forEach(product => {
            console.log (product.displayDetails())
        });
        console.log(this.orderDate)
        console.log(this.calculateShippingCosts())
        console.log(this.estimateDeliveryTime())
    }

    

}

