// binary search
function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) {
        return middleIndex
    }
    if (target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1)
    } else {
        return search(arr, target, middleIndex + 1, rightIndex)
    }
}

// binary search always assumes a sorted array.
const arr = [-5, 2, 4, 6, 10]
const searchResult1 = recursiveBinarySearch(arr, 10)
const searchResult2 = recursiveBinarySearch(arr, 6)
const searchResult3 = recursiveBinarySearch(arr, 20)
console.log(searchResult1)
console.log(searchResult2)
console.log(searchResult3)