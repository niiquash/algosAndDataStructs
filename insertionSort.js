// insertion sort here
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numToInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > numToInsert) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = numToInsert;
    }
    return arr;
}

const arr = [8, 20, -2, 4, -6];
result = insertionSort(arr);
console.log(result)