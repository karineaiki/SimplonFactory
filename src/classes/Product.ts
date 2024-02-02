import { ClothingSize } from "./enums/ClothingSize";
import { ShoeSize } from "./enums/ShoeSize";

// Definition de la classe Dimensions et son constructeur
type Dimensions =  {
    length: number;
    width: number;
    height: number;

    /*constructor(lenght = 3, width = 3, height = 3) {
        this.length = length;
        this.width = width;
        this.height = height;
    }*/
}
//Définition de la classe Product et son constructeur
export class Product {
    productId: number;
    name: string;
    weight: number;
    price: number;
    //dimensions de type Dimensions
    dimensions: Dimensions

    constructor(productId = 1, name = "Shoes", weight = 38, price = 25, dimensions: Dimensions) {
        this.productId = productId;
        this.name = name;
        this.weight = weight;
        this.price = price;
        this.dimensions = dimensions;
    };
    
    //méthode pour retourner les informations de Product, intégration de displayDimensions 
    displayDetails() {
        const productInfo = `ProductId : ${this.productId}, Name : ${this.name}, Weight : ${this.weight}, Price : ${this.price}`
        const dimensionsInfo = this.displayDimensions()
        return `${productInfo}` + `${dimensionsInfo}`
    };

    //méthode pour retourner les informations de Dimensions
    displayDimensions() {
        const { length, width, height } = this.dimensions
        return `length: ${length}, width: ${width}, height: ${height}`
    }
};

class Clothing extends Product {
     size: ClothingSize
    constructor(productId: number, name: string, price: number, weight: number, dimensions: Dimensions, size: ClothingSize) { 
        super(productId, name, price, weight, dimensions)
        this.size = size;
    }
}

export class Shoes extends Product {
    size: ShoeSize | undefined
}