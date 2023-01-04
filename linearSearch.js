// Linear Search
function linearSearch(arr, target) {
    arrCopy = arr.slice() // a shallow copy of original array input
    for (let i = 0; i < arrCopy.length; i++) {
        if (target === arr[i]) {
            return i
        }
    }
    return -1
}

const arr = [-5, 2, 10, 4, 6]
const searchResult1 = linearSearch(arr, 10)
const searchResult2 = linearSearch(arr, 6)
const searchResult3 = linearSearch(arr, 20)
console.log(searchResult1)
console.log(searchResult2)
console.log(searchResult3)