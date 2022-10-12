
let broj;

let niz = [];

while (true) {
    broj = Number(prompt("Unesite broj:"));
    if (broj % 3 === 0 && broj % 5 === 0) {
        console.log(`FIZZBUZZ (${broj}) `)
        break;
    } else if (broj % 3 === 0) {
        console.log(`FIZZ (${broj})`);
    } else if (broj % 5 === 0) {
        console.log(`BUZZ (${broj})`);
    }
    niz.push(broj)
}
console.log(niz)











