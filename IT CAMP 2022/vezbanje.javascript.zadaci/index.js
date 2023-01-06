// Write a simple Javascript program to join all elements of the following array into a string

/*

color=["Red","Green","White","Black"];


console.log(color.toString());
console.log(color.join());
console.log(color.join("+"));

*/



//Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
//For example if you accept 025468 the output should be 0-254-6-8. 

/*
var num = window.prompt();
var str = num.toString();
var result = [str[0]];

for (var x = 1; x < str.length; x++) {

    if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
        result.push('-', str[x]);
    } else {
        result.push(str[x]);
    }
}
console.log(result.join(''));

*/





/*
niz=[];

matrica = [
    [0,3,6],
    [3,6,9],
    [6,9,12],
]


for (let i = 0; i < matrica.length; i++) {
    for (let j = 0; j < matrica[i].length; j++) {
        niz.push(matrica[i][j]*3);
    }
}

console.log(niz);

*/














