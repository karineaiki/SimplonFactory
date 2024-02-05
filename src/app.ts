import  { Customer }from "./classes/Customer"
import { Order } from "./classes/Order"
import { Clothing, Product, Shoes } from "./classes/Product"
import { ClothingSize } from "./classes/enums/ClothingSize"
import { ShoeSize } from "./classes/enums/ShoeSize"
import ExpressDelivery from "./interfaces/ExpressDelivery"
import StandardDelivery from "./interfaces/StandardDelivery"

//création d'instances de Classe.
const michel = new Customer(12, "Michel", "michel.dupont@gmail.com")

const addidas = new Shoes (1, "Chaussures Addidas", 20, 3, { length: 20, height: 5, width: 5 }, ShoeSize.EU40)

const skirt = new Clothing (3, "Skirt", 30, 20, { width: 20, height: 10, length: 5 }, ClothingSize.M)

const dateUn = new Date(2024, 0o1)
const cart = new Order (1, michel, [ addidas, skirt ], dateUn )

const newDelivery = new StandardDelivery()

cart.setDelivery(newDelivery)

cart.displayOrder()

cart.setDelivery(newDelivery)

