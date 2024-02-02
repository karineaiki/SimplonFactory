// Definition de la class Address et de son constructeur
type Address = {
    street: string;
    city: string;
    postalCode: string;
    country: string;

    /*constructor(street = "rue des fleurs", city = "Toulouse", postalCode = "31200", country = "FRANCE") {
        this.street = street;
        this.city = city;
        this.postalCode = postalCode;
        this.country = country;
    };*/
};

//Définition de la classe Customer et son constructeur
export class Customer {
    // l'addresse étant optionnelle, nous rajoutons un "?" à son itération.
    address?: Address;
    customerId: number;
    name: string;
    email: string;

    constructor(customerId: number, name: string, email:string, address?: Address) {
        this.customerId = customerId;
        this.name = name;
        this.email = email;
        this.address = address;
    };

    // Méthode pour retourner les informations d'un client
    displayInfo() {
        const customerInfo = `Customer ID : ${this.customerId}, Name : ${this.name}, Email : ${this.email}`
        const addressInfo = this.address ? this.displayAddress() : "No address found";
        return `${customerInfo}` + `${addressInfo}`
    };

    displayAddress() {
        if (this.address) {
            const { street, postalCode, city, country } = this.address;
            return `Address: ${street}, ${postalCode}, ${city}, ${country} `
        } else {
            return "No address found";
        }

    }
}

