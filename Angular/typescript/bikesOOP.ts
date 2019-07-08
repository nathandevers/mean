class Bike{
    price: number;
    max_speed: string;
    miles: number;
    constructor(price: number, max_speed: string) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
        console.log("New Bike");
    }

    displayInfo() {
        console.log("Price: " + this.price + ", Max Speed: " + this.max_speed + ", Total Miles: " + this.miles);
    }

    ride() {
        console.log("riding...");
        this.miles += 10;
        return this;
    }
    reverse() {
        console.log("reversing...");
        if (this.miles <= 5) {
            this.miles = 0;
            return this;
        }
        else {
            this.miles -= 5;
            return this;
        }
    }
}

var bike1 = new Bike(100, "20mph");
var bike2 = new Bike(200, "25mph");
var bike3 = new Bike(250, "30mph");

console.log("~Bike 1~");
bike1.ride().ride().ride().reverse();
bike1.displayInfo();

console.log("~Bike 2~");
bike2.ride().ride().reverse().reverse();
bike2.displayInfo();

console.log("~Bike 3~");
bike3.reverse().reverse().reverse();
bike3.displayInfo();