


string = prompt("Unesite neki string :");

slovo = prompt("Unesite neko slovo :");

brojac = 0;
function mojaFunkcija(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === slovo) {
            brojac += 1;
        }
    }
    return (`Slovo ${slovo} se ponavlja ${brojac} puta`)
}
console.log(string)
console.log(mojaFunkcija(string))





























































