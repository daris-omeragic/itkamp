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





































