// Import de Deliverable afin dimplanter ExpressDelivery
import { Deliverable } from "./Deliverable";

//classe contenant la méthode pour estime le délai de livraison et les couts de livraison si le customer choisit l'envoi express
export default class ExpressDelivery implements Deliverable {
   estimateDeliveryTime(weight: number): number {
      if (weight <= 5) {
         return 1
      } else {
         return 3
      };
   };
   calculateShippingFee(weight: number): number {
      if (weight < 1) {
         return 8
      } else if (weight > 1 && weight < 5) {
         return 14
      } else {
         return 30
      }
   }
}