// Create a Highway with different types of vehicles (bus, car, motorcycle, etc..). Bus, Car Motorcycle instances inherit from Vehicle.
function Vehicle(make, model) {
  this.make = make;
  this.model = model;
}

function Bus(make, model, capacity) {
  Vehicle.call(this, make, model);
  this.capacity = capacity;
}
Bus.prototype = Object.create(Vehicle.prototype);
Bus.prototype.constructor = Bus;

function Car(make, model, doorsNumber) {
  Vehicle.call(this, make, model);
  this.doorsNumber = doorsNumber;
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function Motorcycle(make, model, hasSidecar) {
  Vehicle.call(this, make, model);
  this.hasSidecar = hasSidecar;
}
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

var bus1 = new Bus("Mercedes", "Citaro", 50);
var car1 = new Car("Dacia", "Sandero", 5);
var motorcycle1 = new Motorcycle("Harley-Davidson", "Sportster", true);

console.log(bus1);
console.log(car1);
console.log(motorcycle1);

// Create 2 Highways and allow a list of unique/different vehicles to run on it.
function Highway(name) {
  this.name = name;
  this.vehicles = [];
}

Highway.prototype.addVehicle = function (vehicle) {
  // Check if the vehicle is not already on the highway
  if (!this.vehicles.includes(vehicle)) {
    this.vehicles.push(vehicle);
    console.log(`${vehicle.make} ${vehicle.model} is now on ${this.name}.`);
  } else {
    console.log(`${vehicle.make} ${vehicle.model} is already on ${this.name}`);
  }
};

var highway1 = new Highway("Highway 1");
var highway2 = new Highway("Highway 2");

// Add vehicle on the highway
highway1.addVehicle(bus1);
highway1.addVehicle(car1);

highway2.addVehicle(motorcycle1);
