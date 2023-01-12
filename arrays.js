const arr = [1, 2, 3, 'Ammon']

// access an element
console.log(arr[0]);

// add element to end
arr.push(4);
// add element at the beginning of array
arr.unshift(0);
// remove element from end
arr.pop()
// remove element from beginning
arr.shift();

// iterate over all elements
for (const item of arr) {
    console.log(item);
}

// Other array methods:
// map, filter, reduce, concat, slice and splice
