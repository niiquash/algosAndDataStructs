// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let swapCount = 0;
    let index = 0;
    while (index < arr.length) {
        if (arr[index] != index + 1) {
            let temp = arr[index];
            arr[index] = arr[arr[index] - 1];
            arr[temp - 1] = temp;
            swapCount++
        } else {
            index++
        }
    }
    return swapCount
}

const arr = [4, 3, 1, 2];
const result = minimumSwaps(arr);
console.log(result);