/* Task:
create class with the name Vehicle that has the following properties:
- type - a string... model - a string ... parts - an object that contains:
-> engine - number(quality of the engine)
-> power - number
-> quality - engine * power 
fuel - number... drive - function that receives fuel loss and decreases the fuel of the vehicle by that number
The constructor - type, model, parts as an object, and the fuel 
*/

class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;  // _model means private
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine * parts.power
        },
            this.fuel = Number(fuel)
    }

  //  get model() {
  //      return this._model;
  //  }


  //  set model(model) {
  //      if (typeof (model) !== "number") {
  //          throw new Error("Sorry!")
  //      }
  //      this._model = model;
  //  }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
//console.log(vehicle.model);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);


let parts1 = {engine: 9, power: 500};
let vehicle1 = new Vehicle('l', 'k', parts1, 840);
vehicle1.drive(20);
console.log(vehicle1.fuel);