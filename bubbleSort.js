// Bubble sort algorithm here
function bubbleSort(arr) {
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}

const arr = [-6, -20, 55, 23, 16, -1, 20, 8, -2, 4];
result = bubbleSort(arr);
console.log(result)