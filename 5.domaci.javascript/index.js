



console.log("SABIRANJE:1")
console.log("ODUZIMANJE:2")
console.log("MNOZENJE:3")
console.log("DELJENJE:4")

racunskaOperacija=Number(prompt("Unesite broj racunske operacije (1-4)"));


broj1=Number(prompt("Unesite neki broj:"));
broj2=Number(prompt("Unesite neki broj:"));
while(true){
    if (racunskaOperacija===1){
        zbir = broj1 + broj2;
        console.log(`Zbir ova dva broja iznosi: ${zbir}`)
        break;
    }if(racunskaOperacija===2){
        razlika = broj1 - broj2;
        console.log(`Razlika ova dva broja iznosi:${razlika}`)
        break;
    }if(racunskaOperacija===3){
        proizvod = broj1 * broj2;
        console.log(`Proizvod ova dva broja iznosi: ${proizvod}`)
        break;
    }if(racunskaOperacija===4){
    kolicnik= broj1 / broj2;
    console.log(`Kolicnik ova dva broja iznosi: ${kolicnik}`)
    break;
    }
    }


