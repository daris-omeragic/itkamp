// 1 zadatak: 


broj1=Number(prompt("Unesite prvi broj:"));
broj2=Number(prompt("Unesite drugi broj:"));

izraz = broj1 > 0 && broj2 < broj1 ;

if (izraz){
    console.log("True")
} else{
    console.log("False")
}




// 2 zadatak:


broj1=Number(prompt("Unesite prvi broj:"));
broj2=Number(prompt("Unsite drugi broj;"));


if (broj1 > 0 && broj2 < broj1){ // primer za false  -6  (FALSE) -4(FALSE)   (FALSE) 
    console.log("True")
}if (broj1 > broj2 || broj2  > 0){  //(FALSE) // (FALSE)   (FALSE)
    console.log("True")
}else{
    console.log("False")
}










