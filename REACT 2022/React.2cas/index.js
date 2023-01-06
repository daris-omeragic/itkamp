

/*
class Car {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    fullName() {
        return console.log(this.name + " " + this.type);
    }
}


const newCar = new Car("Audi", "Limuzina");

console.log(newCar);

newCar.fullName();
*/


/*
class User {
  constructor(name, lastname, yearOfBirth) {
    this.name = name;
    this.lastname = lastname;
    this.yearOfBirth = yearOfBirth;
    this.age = this.calculateOldYear(yearOfBirth);
  }

  full() {
    return console.log(`${this.name} ${this.lastname}`);
  }

  calculateOldYear(yearOfBirth) {
    return 2022 - yearOfBirth;
  }
  fullAndYearOfBirth() {
    return console.log(`
    Name: ${this.name} 
    Lastname: ${this.lastname} 
    Year of birth:  ${this.yearOfBirth}`)
  }
}


class Additional extends User {
  #statesArr = [
    {
      state: "USA",
      cId: "+1",
    },
    {
      state: "Mexico",
      cId: "+52",
    },
    {
      state: "India",
      cId: "+91",
    },
    {
      state: "China",
      cId: "+86",
    },
    {
      state: "Serbia",
      cId: "+381",
    },
    {
      state: "UK",
      cId: "+44",
    },
  ];
  constructor(street, phoneNumber, city, state) {
    super(User1.name, User1.lastname, User1.yearOfBirth);
    this.street = street;
    this.city = city;
    this.state = state;
    this.phoneNumber = phoneNumber;
    this.number = this.numberHandler(state, phoneNumber);
  }

  numberHandler(state, phoneNumber) {
    const findState = this.#statesArr.find((s) => s.state === state);
    return phoneNumber.replace(phoneNumber[0], findState.cId);
  }
  fullAdress() {
    return console.log(`
    State : ${this.state} 
    City: ${this.city} 
    Street: ${this.street}`)
  }
  ispis() {
    this.beatify = {
      name: User1.name,
      lastname: User1.lastname,
      yearOfBirth: User1.yearOfBirth,
      street:this.street,
      city: this.city,
      state: this.street,
      number: this.number,
      phoneNumber: this.phoneNumber,
    };
    console.log(this.beatify);
  }
}


const User1 = new User("Daris", "Omeragic", 2006);
const additional = new Additional("Rifata B", "062 18 28 503", "Novi Pazar", "Serbia");

//console.log(User1);

//User1.full();

//console.log(additional);
additional.ispis();
//User1.fullAndYearOfBirth();
//additional.fullAdress();
*/
// forEach method
/*
const names = ["Daris","Ahmed","Omer","Hamza","Mirza"];
names.forEach(element => {
  console.log(element)
});
*/


/*
const numbers = [12, 24, 354, 54, 6, 576, 85, 64, 53, 75, 757, 683, 3, 20];

const kvadrat = [...numbers.map(e => {
  return `${e} : ${e**2}`;
})];

console.log(kvadrat);
*/

// filter method
/*
function pozitvniBrojevi (niz){
  return niz.filter (e => e > 0);
  }

console.log(pozitvniBrojevi([-2,5,65,2,-5,-9,-32,53,-24,42]));
*/


// map method 
/*
function redniBrojeviStringova (niz){
    return niz.map((string,index)=>{
      return `${index} : ${string}`;
    });
}

console.log(redniBrojeviStringova(["apple","chery","banana"]));
*/

/*
function minMaxBrojevi(niz) {
  // Koristimo Math.min() i Math.max() funkcije da bismo pronašli najmanji i najveći broj u nizu
  const min = Math.min(...niz);
  const max = Math.max(...niz);

  // Vraćamo objekat u obliku "{min: najmanji_broj, max: najveći_broj}"
  return { min, max };
}

// Testiramo funkciju
console.log(minMaxBrojevi([232,4,354,35,3,4,2,4,46,5,877,896785,64,53,536,98]));
*/










