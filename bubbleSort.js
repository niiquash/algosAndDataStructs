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

const arr = [1, 2, 3, 4, 5];
result = bubbleSort(arr);
console.log(result)