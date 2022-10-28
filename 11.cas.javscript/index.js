
/*
function cunstomSlice(arr,startIndex,endIndex){
    if (!startIndex){
        startIndex = 0
    }
    if (!endIndex){
        endIndex= arr.length
    }
    myArr=[]
    for (let i = startIndex;  i < endIndex; i++) {
        myArr.push(arr[i]);
    }
    return myArr
}


const animals =[ "ant","bison","camel","duck","elephant"]


subArr=cunstomSlice(animals,1,3);

console.log(subArr)
*/


/*
function primeNumber(number){
    if (number % 2 === 0){
        return false;
    } else if(number % 3 === 0){
        return false;
    } else if(number % 5 === 0){
        return false
    }
    for (let i = 7; i < number; i++) {
        if (number % i === 0 ){
            return false
        }
    }
    return true
}

myNumber=79

if (primeNumber(myNumber)){
    console.log("Broj je prost")
}else{
    console.log("Broj nije prost")
}
*/
/*
function amountToCoins(number) {
    appReturn = []
    while (number >= 0) {
        if (number >= 25) {
            number = number - 25;
            appReturn.push(25)
        } else if (number >= 10) {
            number = number - 10;
            appReturn.push(10)
        } else if (number >= 5) {
            number = number - 5;
            appReturn.push(5)
        } else if (number >= 2) {
            number = number - 2;
            appReturn.push(2)
        } else if (number >= 1) {
            number = number - 1;
            appReturn.push(1)
            return appReturn;
        }
    }
}

res = amountToCoins(46)

console.log(res)
*/









