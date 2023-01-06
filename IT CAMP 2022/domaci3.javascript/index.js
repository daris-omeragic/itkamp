
proizvoljan_unos_brojeva=Number(prompt("Unesite proizvoljan broj brojeva:"));

zbir_parnih_brojeva=0;

zbir_neparnih_brojeva=0;

for (i = 0; i < proizvoljan_unos_brojeva; i++) {
    broj=Number(prompt("Unesite neki broj:"));
    if (broj % 2 ===0){
        zbir_parnih_brojeva=zbir_parnih_brojeva+broj    
    }else{
        zbir_neparnih_brojeva=zbir_neparnih_brojeva+broj
    }
}

console.log(`Zbir parnih brojeva iznosi ${zbir_parnih_brojeva} a zbir neparnih ${zbir_neparnih_brojeva}`)


























