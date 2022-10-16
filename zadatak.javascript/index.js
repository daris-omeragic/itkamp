
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