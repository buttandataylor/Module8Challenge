// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// The Motorbike class extends the Vehicle class
class Motorbike extends Vehicle {
  // Declare properties of the Motorbike class
  override vin: string;
  override color: string;
  override make: string;
  override model: string;
  override year: number;
  override weight: number;
  override topSpeed: number;
  wheels: Wheel[];

  // Constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super(vin, color, make, model, year, weight, topSpeed); // Call the parent class constructor
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // Check if the wheels array has 2 elements
    if (wheels.length === 2) {
      this.wheels = wheels;
    } else {
      this.wheels = [
        new Wheel(18, 'Default Front Wheel Brand'), // Default front wheel
        new Wheel(18, 'Default Rear Wheel Brand'),  // Default rear wheel
      ];
    }
  }

  // Implement the wheelie method
  performWheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails(); // Call the printDetails method of the parent class
    console.log(`Color: ${this.color}`);
    console.log(`Wheels: Front - ${this.wheels[0].diameter} inches, Rear - ${this.wheels[1].diameter} inches`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;

