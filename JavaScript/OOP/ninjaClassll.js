function Ninja(name) {
    this.name = name;
    this.health = 100;
    const speed = 3;
    const strength = 3;
    this.sayName = function () {
        console.log ("My ninja name is " + name);
    }
    this.showStats = function () {
        console.log ("Name: "+ this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    }
    this.drinkSake = function () {
        this.health += 10;
    }
    this.punch = function (Ninja) {
        Ninja.health -= 5;
        console.log (Ninja.name + " was punched by " + this.name + " and lost 5 Health!")
    }
    this.kick = function (Ninja) {}
        Ninja.health -= 15;
        console.log(Ninja.name + " was kicked by " + this.name + " and lost 15 Health!")
}
// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// // -> "My ninja name is Hyabusa!"
// ninja1.showStats();
// // -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"
redNinja.showStats();
blueNinja.kick(redNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
blueNinja.showStats();