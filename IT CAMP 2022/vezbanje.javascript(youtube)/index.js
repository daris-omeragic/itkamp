//console.log('Pozdrav iz konzole')

//console.error('Pozdrav iz konzole')

//console.warn("Pozdrav iz conzole")

//window.alert('Pozdrav iz Popup-a')

//window.open()

//document.write('Pozdrav sa stranice')


//document.getElementById('poruka').innerText='Pozdrav'



//let cysecor="Sta se radi braco";
//console.log(cysecor)

//let godine=5;

//let mjesec=6;

//let rezultat=godine+mjesec

//console.log(godine)

//console.log(rezultat)


///typeof sluzi za prikaz vrste podatka odnosno broj 5 je number
//console.log(typeof(godine));

///typeof sluzi za prikaz vrste podatka odnosno ovo se string
//console.log(typeof(cysecor));

//nekiBroj="6"


///Broj koji je u stringu pretvaramo u int
//nekiBroj=parseInt(nekiBroj)

//console.log(typeof(nekiBroj))


//let prviBroj=5;
//let treci_tmp;
//let DrugiBroj=7;
/// Prvi broj uzima vrednost drugog broja "=" oznacava da uzima vrednost 


///0========5
//treci_tmp=prviBroj;
///5=======7
//prviBroj=DrugiBroj;
///7=======5
//DrugiBroj=treci_tmp;

//console.log(prviBroj)

//console.log("Prvi broj je:"+ prviBroj)
//console.log("Drugi broj je:"+ DrugiBroj)


//let ime="Daris";
//let prezime="Omeragic";
//let Mojegodine=16;

//console.log("Moje ime je "+ ime + " prezivam se " + prezime + " i imam" + Mojegodine + " godina")
//console.log(`Moje ime je ${ime},a prezime ${prezime} i imam ${Mojegodine} godina`)





/// &&(end) logicki operetator (true) ukoliko su svi uslovi tacni, ukoliko je jedan netacan ispisuje se false
///  || (or) logicki operator (true) ukoliko je bar jedan uslov tacan,ukoliko su svi uslovi netacni ispisuje se false


//let prviBroj=22

//let drugiBroj= 3


//if (prviBroj>drugiBroj){
   // console.log("Prvi broj je veci od drugog")
//}
//else{
    //console.log("Prvi broj je manji od drugog")
//}



// Brojac  novcanica
/*
//  vrednost novcanica
let novcanice=[5, 10, 30, 20, 13, 33, 77, 65, 43, 93]
//  broj_novcanica=10
let broj_novcanica=novcanice.length;
//   brojac=0 pocetna vrednost
let brojac=0;
//dok je brojac manji od <  10
while(brojac<broj_novcanica){
    console.log("----------------------------------------")
    console.log(`Novcanica na poziciji ${brojac} ima vrednost ${novcanice[brojac]} `)
// brojac se povecava za 1 
    brojac++;
}
console.log(`Broj novcanica ukupno iznosi ${broj_novcanica}`)
console.log('-----------KRAJ PETLJE----------')

if(brojac<broj_novcanica){
    console.log("Brojac je manji")
}else{
    console.log("Brojac nije manji")
}

console.log(`Brojac:${brojac}`)
*/

/*
let automobili=["Audi","Bmw","Porsche","Skoda"]


automobili.forEach(function(automobil){
    console.log(automobil)
})
*/



/*
let nekretnine={
    stan: 56000,
    kuca:200000,
    plac: 132930,
    zemljiste: 92323
};

racunanje_mjesecne_rate(6,"stan")
racunanje_mjesecne_rate(7,"kuca")
racunanje_mjesecne_rate(22, "zemljiste")
racunanje_mjesecne_rate(13,"plac")
console.log(`Mjesecna rata za ${vrsta_nekretnine} iznosi ${rata} eura na ${godine} godina`)

function racunanje_mjesecne_rate(godine,vrsta_nekretnine){
    let mjeseci= godine * 12;
    let rata=nekretnine[vrsta_nekretnine] / mjeseci;
    rata=rata.toFixed(2)
    console.log(`Mjesecna rata za ${vrsta_nekretnine} iznosi ${rata} eura na ${godine} godina`)
}
*/

// Javascript za kalkulator inflacije
function inflation_calculator(){
    let inflation_rate=document.getElementById("inflation_rate");
    let money = document.getElementById("money");
    
    inflation_rate = parseFloat (inflation_rate.value);
    money= parseFloat (money.value);
    
    let years = document.getElementById("years").value;
    years = parseFloat(years);
    let worth = money+(money*(inflation_rate/100));
    for (let i = 1; i < years;i++){
        worth+= worth * (inflation_rate/100);
    }
    worth=worth.toFixed(2);
    let newElement = document.createElement("div")
    newElement.className = "new-value";
    newElement.innerText=`Danasnjih ${money}$ vrijedi isto kao  ${worth} $ za ${years} godina`
    document.querySelector(".conteiner").appendChild(newElement)
}





