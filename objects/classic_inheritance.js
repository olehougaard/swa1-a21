let x = {a: 7}
let y = Object.create(x)
console.log(y.a) //7
let z = {c: 87}
Object.setPrototypeOf(z, y)// z -> y -> x
console.log(y.isPrototypeOf(z)) // true

// Constructor:
function CarX(licensePlate, model) {
    this.licensePlate = licensePlate
    this.getLicensePlate = function() { return this.licensePlate}
}


function Car(licensePlate, model) {
    this.licensePlate = licensePlate
    this.model = model
}

// The prototype used for all objects created with new Car(...)
Car.prototype.getLicensePlate = function() { return this.licensePlate }

let car = new Car('AB 12 345', 'Fiat')
console.log(Car.prototype.isPrototypeOf(car)) // true

function ElectricCar(licensePlate, model, batteryCapacity) {
    Car.call(this, licensePlate, model) // Why not Car(licensePlate, model)
    this.batteryCapacity = batteryCapacity
}

Object.setPrototypeOf(ElectricCar.prototype, Car.prototype)
ElectricCar.prototype.batteryLife = function(consumption) {
    return this.batteryCapacity / consumption
}
