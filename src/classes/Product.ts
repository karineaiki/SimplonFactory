import { ClothingSize } from "./enums/ClothingSize";
import { ShoeSize } from "./enums/ShoeSize";

// Definition de la classe Dimensions et son constructeur
type Dimensions =  {
    length: number;
    width: number;
    height: number;
}
//Définition de la classe Product et son constructeur
export class Product {
    productId: number;
    name: string;
    weight: number;
    price: number;
    //dimensions de type Dimensions
    dimensions: Dimensions

    constructor(productId: number, name: string, weight: number, price: number, dimensions: Dimensions) {
        this.productId = productId;
        this.name = name;
        this.weight = weight;
        this.price = price;
        this.dimensions = dimensions;
    };
    
    //méthode pour retourner les informations de Product, intégration de displayDimensions 
    displayDetails() {
        const productInfo = `ProductId : ${this.productId}\n Name : ${this.name}\n Weight : ${this.weight}\n Price : ${this.price} \n`
        const dimensionsInfo = this.displayDimensions()
        return `${productInfo} ` + `${dimensionsInfo}`
    };

    //méthode pour retourner les informations de Dimensions
    displayDimensions() {
        const { length, width, height } = this.dimensions
        return `length: ${length}\n width: ${width}\n height: ${height}\n`
    }
};

//création de sous classes : clothingsize et shoesize
export class Clothing extends Product {
    // création de size de typer ClothingSize
     size: ClothingSize
     //en paramètre du constructeur, nous reprenons tous les éléments de la class Product en y ajoutant la ClothingSize
    constructor(productId: number, name: string, price: number, weight: number, dimensions: Dimensions, size: ClothingSize) { 
        // aprèsles récupérer, on les ajoute dans le constructeur. super() permet de rajouter les éléments de la classe parente, puis on ajoute dans le constructeur les éléments de la class enfante
        super(productId, name, price, weight, dimensions)
        this.size = size;
    }
}

//Même processus pour la sous class Shoes
export class Shoes extends Product {
    size: ShoeSize
    constructor(productId: number, name: string, price: number, weight: number, dimensions: Dimensions,size: ShoeSize) {
        super(productId, name, price, weight, dimensions)
        this.size = size
    }
}