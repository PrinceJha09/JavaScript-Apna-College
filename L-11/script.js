//basic object:

// let student = {
//     fullName : "Prince Kumar Jha",
//     marks : 9.0,
//     printMarks : function(){
//         console.log("marks is "+ this.marks);
//     },
// };

//prototype creation

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%")
//     },
// }

// let newEmployee = {
//     salary : 50000,
// };

// newEmployee.__proto__ = employee;

//Classes: 

class Car {  
    constructor(brand, mileage){    //constructor
        console.log("car object is created");
        this.brandName = brand;
        this.mileage = mileage;
    }
    start(){
        console.log ("start");
    }

    stop(){
        console.log("stop");
    }

    maxSpeed(){
        console.log("Max Speed is 140km/h");
    }

    cc = this.cc = 120;
}

let fortuner = new Car("fortuner",10);

//Inheritance 

//considering Car as Parent

class ToyotaCar extends Car {
    constructor(brand,mileage){
        super(brand,mileage);
        this.driver = "Prince";
    }
    cc = this.cc = 100;

    speed(){
        super.maxSpeed();
        console.log("average speed is 100km/h");
    }
}

let lexus = new ToyotaCar("lexus", 15);

//ERROR HANDLING

let a=5;
let b=10;
console.log("a + b = ",a+b);
console.log("a + b = ",a+b);
try {
    console.log("a + b = ",a+c);
} catch (error) {
    console.log(error);
}
console.log("a + b = ",a+b);
console.log("a + b = ",a+b);
console.log("a + b = ",a+b);
console.log("a + b = ",a+b);
console.log("a + b = ",a+b);

