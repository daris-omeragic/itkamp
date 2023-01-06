// cd - change directory je komanda u terminalu
// koja sluzii za navigiranje kroz foldere unutar sistema

// ls - je komanda koja sluzi za islistavanje
// fajlova i foldera unutar foldera


// mkdir - make directroy je komanda koja sluzi za kreiranje novog direktorija ili foldera

//Document
//Object
//Manipulation
// I sluzi za manipulaciju elementima html-a kroz JS kod 

// Name

var ime = document.getElementById("ime"); // funkcija u js-u koja omogucava pristup elementu putem njegovog id-ja


ime.style.color = "#E84F2E";  // style je nacin pristupa i izmene css-a elemnta a color je atribut koji menjamo, moze biti bilo koji drugi 
ime.innerText = "Daris"; // innnerText je nacin izmene ili popunjavanja texta unutar elemenata, innerHTML je za unos html elementa
ime.style.fontSize = "30px" // promena velicina fonta kroz css

// LastName

var prezime = document.getElementById("prezime");


prezime.innerText = "Omeragic"
prezime.style.fontSize = "30px"







// Nature image

var natureIMage = document.getElementById("nature");



natureIMage.style.borderRadius = "50%"
natureIMage.style.width = "300px"
natureIMage.style.height = "300px"

natureIMage.addEventListener("click", () => {
    natureIMage.style.display = "none";
    setTimeout(() => {
        natureIMage.style.display = "block"
    }, 5000);
});






console.log(natureIMage.getAttribute("src"));



// addEventListener je funkcija koja se dodaje html elementu koji smo naznacili
// prati dogadjanja oko ili unutar naznacenog elementa i izvrsava funkciju koja mu je zadata
// prvi argument funkcije je event(sta korisnik treba da uradi)
// drugi argument je fuknkcija koja treba program da obavi


// get Attribute je funkcija koja uzima unete podatke atributa koji se nalaze unutar elementa koji smo naznacili























