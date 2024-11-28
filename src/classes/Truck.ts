// Import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class extends the Vehicle class and implements the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // Declare properties of the Truck class
  override vin: string;
  override color: string;
  override make: string;
  override model: string;
  override year: number;
  override weight: number;
  override topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super(vin, color, make, model, year, weight, topSpeed); // Call the parent class constructor
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    // Check if the wheels array has 4 elements; if not, create default wheels
    if (wheels.length === 4) {
      this.wheels = wheels;
    } else {
      this.wheels = [
        new Wheel(20, 'Default Front Left Wheel Brand'), // Default front left wheel
        new Wheel(20, 'Default Front Right Wheel Brand'), // Default front right wheel
        new Wheel(20, 'Default Rear Left Wheel Brand'), // Default rear left wheel
        new Wheel(20, 'Default Rear Right Wheel Brand'), // Default rear right wheel
      ];
    }
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleWeight = vehicle.weight;
    const vehicleMakeModel = `${vehicle.make} ${vehicle.model}`;

    if (vehicleWeight <= this.towingCapacity) {
      console.log(`The truck is towing the ${vehicleMakeModel}`);
    } else {
      console.log(`${vehicleMakeModel} is too heavy to be towed by this truck.`);
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails(); // Call the printDetails method of the parent class
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels: Front Left - ${this.wheels[0].diameter} inches, Front Right - ${this.wheels[1].diameter} inches, Rear Left - ${this.wheels[2].diameter} inches, Rear Right - ${this.wheels[3].diameter} inches`);
  }
}

// Export the Truck class as the default export
export default Truck;

