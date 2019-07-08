class Ninja {
    constructor(name) {
      this.speed = 3;
      this.strength = 3;
      this.health = 100;
      this.name = name;
    }
    sayName() {
      console.log(`My name is ${this.name}`);
    }
    showStats() {
      console.log(`Strength: ${this.strength}`);
      console.log(`Speed: ${this.speed}`);
      console.log(`Health: ${this.health}`);
    }
    drinkSake() {
      this.health += 10;
    }
  }
  const ninja1 = new Ninja("Hyabusa");
  ninja1.sayName();
  ninja1.drinkSake();
  ninja1.showStats();
  class Sensei extends Ninja {
    constructor(name) {
      super(name);
      this.health = 200;
      this.speed = 10;
      this.strength = 10;
      this.wisdom = 10;
    }
    showStats() {
      super.showStats();
      console.log(`Wisdom: ${this.wisdom}`);
    }
    speakWisdom() {
      super.drinkSake();
      console.log(`Confucius says: What one programmer can do in one month, two programmers can do in two months.`);
    }
  }
  const sensei1 = new Sensei("Master Splinter");
  sensei1.speakWisdom();
  sensei1.sayName();
  sensei1.showStats();