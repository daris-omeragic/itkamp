
// zadatak(12)
niz = [];
for (i = 0; i < 10; i++) {
    broj = Number(prompt("Unesite broj:"));
    niz.push(broj);
}


max = niz[0];
min = niz[0];
for (i = 0; i < niz.length; i++) {
    if (niz[i] >= max) {
        max = niz[i]; 
    } if (niz[i] <= min) {
        min = niz[i]
    }
}
console.log(niz);
console.log(`Najveci element u nizu je ${max}`)
console.log(`Najmanjii element u nizu je ${min}`)











