array = [23, 32, 54, 65, 24, 45, 8, 75, 13, 42, 5, 434, 34];

array2 = [];
function myFilter(callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            array2.push(array[i]);
        }
    }
    console.log(array)
    return array2;
}

result = myFilter(i => i % 2 === 0 && i % 3 === 0)




console.log(result)