/*
firstLargestNumber = 0;
secondLargestNumber = 0;

arr =[23,54,6,3,4,464,5,57,6,4,35] ;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargestNumber) {
        secondLargestNumber = firstLargestNumber;
        firstLargestNumber = arr[i];
    } else if (arr[i] > secondLargestNumber) {
        secondLargestNumber = arr[i]
    }
}
console.log(arr);
console.log(`Drugi najveci broj u nizu je ${secondLargestNumber}`);


*/


// palindrome
/*
function checkPalindrome(str) {
    const len = str.length; 
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            console.log('It is not palindrome');
            return;
        }
    }
    console.log('It is a palindrome');
}

const string = prompt('Enter a string or number to check for Palindrome: ');

const value = checkPalindrome(string);
console.log(value)

*/

/*
console.log('fired first');
console.log('fired second');

setTimeout(()=>{
    console.log('fired third');
},200);

console.log('fired last');
*/


/*
function makeTalk(animal) {
    const noises = {
        cat: 'purr',
        dog: 'woof',
        cow: 'moo',
        pig: 'oink',
    }

    console.log(`A ${animal} goes ${noises[animal]}.`);
}

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const animals = ['cat', 'dog', 'cow', 'pig'];
const randomAnimal = getRandom(animals);

setTimeout(() => {
    makeTalk(randomAnimal);
}, 1000);
*/
