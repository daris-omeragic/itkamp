array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 56, 57, 67, 523, 43, 556, 51, 768, 558, 889, 242]

const binarySearch = (array, item) => {
    low = 0
    high = array.length - 1
    while (low <= high) {
        middle = Math.floor((low + high) / 2)
        guess = array[middle]
        if (guess === item) {
            return middle
        }
        if (guess > item) {
            high = middle - 1
        } else {
            low = middle + 1
        }
    }
    return "number not found"
}
console.log(binarySearch(array, 67))




































