export interface Deliverable {
    estimateDeliveryTime(weight:number):number 
    calculateShippingFee(weight:number):number
}