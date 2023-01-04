// binary search
function binarySearch(arr, target) {
    if (arr.length < 1) {
        return -1
    }
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (arr[middleIndex] === target) {
            return middleIndex
        }
        if (arr[middleIndex] > target) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

// binary search always assumes a sorted array.
const arr = [-5, 2, 4, 6, 10]
const searchResult1 = binarySearch(arr, 10)
const searchResult2 = binarySearch(arr, 6)
const searchResult3 = binarySearch(arr, 20)
console.log(searchResult1)
console.log(searchResult2)
console.log(searchResult3)