//complete this code
class Animal {
	constructor(species){
		this._species=species;
	}
	get species(){
		return this._species;
	}
	makeSound(){
		console.log('Animal make Generic sound');
	}
}

class Dog extends Animal {
	bark() {
        console.log("woof");
    }

    // Override the makeSound method for Dog
    makeSound() {
        console.log("Woof");
    }
}

class Cat extends Animal {
	purr() {
        console.log("purr");
    }

    // Override the makeSound method for Cat
    makeSound() {
        console.log("Meow");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
