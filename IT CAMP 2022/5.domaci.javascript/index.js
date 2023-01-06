



console.log("SABIRANJE:1")
console.log("ODUZIMANJE:2")
console.log("MNOZENJE:3")
console.log("DELJENJE:4")

while (true) {

    racunskaOperacija = Number(prompt("Unesite broj racunske operacije (1-4)"));
    if (racunskaOperacija === 0) {
        break
    }
    broj1 = Number(prompt("Unesite neki broj:"));
    broj2 = Number(prompt("Unesite neki broj:"));
    if (racunskaOperacija === 1) {
        zbir = broj1 + broj2;
        console.log(`Zbir ova dva broja iznosi: ${zbir}`)
    } if (racunskaOperacija === 2) {
        razlika = broj1 - broj2;
        console.log(`Razlika ova dva broja iznosi:${razlika}`)
    } if (racunskaOperacija === 3) {
        proizvod = broj1 * broj2;
        console.log(`Proizvod ova dva broja iznosi: ${proizvod}`)
    } if (racunskaOperacija === 4) {
        kolicnik = broj1 / broj2;
        console.log(`Kolicnik ova dva broja iznosi: ${kolicnik}`)
    }
}


