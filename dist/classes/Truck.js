// Import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// The Truck class extends the Vehicle class and implements the AbleToTow interface
class Truck extends Vehicle {
    // Constructor that accepts the properties of the Truck class
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
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
        }
        else {
            this.wheels = [
                new Wheel(20, 'Default Front Left Wheel Brand'), // Default front left wheel
                new Wheel(20, 'Default Front Right Wheel Brand'), // Default front right wheel
                new Wheel(20, 'Default Rear Left Wheel Brand'), // Default rear left wheel
                new Wheel(20, 'Default Rear Right Wheel Brand'), // Default rear right wheel
            ];
        }
    }
    // Implement the tow method from the AbleToTow interface
    tow(vehicle) {
        const vehicleWeight = vehicle.weight;
        const vehicleMakeModel = `${vehicle.make} ${vehicle.model}`;
        if (vehicleWeight <= this.towingCapacity) {
            console.log(`The truck is towing the ${vehicleMakeModel}`);
        }
        else {
            console.log(`${vehicleMakeModel} is too heavy to be towed by this truck.`);
        }
    }
    // Override the printDetails method from the Vehicle class
    printDetails() {
        super.printDetails(); // Call the printDetails method of the parent class
        console.log(`Towing Capacity: ${this.towingCapacity}`);
        console.log(`Wheels: Front Left - ${this.wheels[0].diameter} inches, Front Right - ${this.wheels[1].diameter} inches, Rear Left - ${this.wheels[2].diameter} inches, Rear Right - ${this.wheels[3].diameter} inches`);
    }
}
// Export the Truck class as the default export
export default Truck;
