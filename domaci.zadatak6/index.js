// write a function to reverse a number


/*
number = Number(prompt("Unesite broj:"))
result = number;
reverse = 0;
function reverseNumbers() {
    while (result > 0 || result < 0 ) {
        digit = result % 10;
        reverse = (reverse * 10) + digit;
        result = parseInt(result / 10);
    }
    console.log(reverse)
}
reverseNumbers()
*/


// write a function to check if an input string is a palindrome


/*
var string = prompt("Unesite neku rec:");
function palindrome() {
    len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            console.log("Nije palindrom");
        } else {
            console.log("Ovo je palindrom");
        }
    }
}
palindrome()
*/