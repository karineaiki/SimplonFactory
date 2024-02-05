// Import de Deliverable afin dimplanter StandardDelivery
import { Deliverable } from "./Deliverable";

//classe contenant la méthode pour estime le délai de livraison et les couts de livraison si le customer choisit l'envoi standard
export default class StandardDelivery implements Deliverable { 
   estimateDeliveryTime(weight:number):number{
      if (weight < 10) {
         return 7
      } else {
         return 10
      };
   } 
   calculateShippingFee(weight:number):number{
      if (weight < 1) {
         return 5
      } else if (weight > 1 && weight < 5) {
         return 10
      } else {
         return 20
      };
   }
}

