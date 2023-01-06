/*
class Car {
	constructor(name, year) {
		console.log("kreiranje novog objekta");
		this.CarName = name;
		this.CarYear = year;
		this.carAge = 2022 - year
	}
	getYearOfCar() {
		console.log(2022 - this.CarYear)
	}
}


obj2 = new Car("Audi", 2005)
obj1 = new Car("FORD", 1990);
console.log(obj1);

console.log(obj2);
obj1.getYearOfCar();


*/




/*
var car = {
	brand: "Audi",
	speed: 0,
	accelerate: function(amount) {
		this.speed += amount;
	},
	brake: function(amount) {
		this.speed -= amount;
	},

	status: function() {
		return this.brand + " running at " + this.speed + " km/h";
	}
};

console.log(car.status());
car.accelerate(30);
console.log(car.status());
car.accelerate(120);
console.log(car.status());
car.brake(15);
console.log(car.status());
*/









/*
class TV {
	constructor (brand) {
		this.brand = brand;
		this.channel = 1;
		this.volume = 50;
	    
	}

	inVolume () {
		if (this.volume <= 100 && this.volume >= 0) {
			return this.volume += 1;
		}
	}
	deVolume () {
		if (this.volume < 100 && this.volume > 0) {
			return this.volume -= 1;
		}
	}
	randomChannel () {
		this.channel = Math.floor(Math.random() * Math.abs(50) - 1);
		return this.channel;
	}
	resetTV () {
		this.channel = 1;
		this.volume = 50;
	}
	output () {
		return console.log(`${this.brand} at channel ${this.channel}, volume ${this.volume}`);
	}
}

const tvFunction = new TV("Sony");
tvFunction.inVolume();
tvFunction.inVolume();
tvFunction.inVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.deVolume();
tvFunction.inVolume();
tvFunction.randomChannel();
//tvFunction.resetTV();
tvFunction.output();
*/

