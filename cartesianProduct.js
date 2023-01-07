// cartesian product algorithm
function cartesianProduct(arr1, arr2) {
    let product = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            product.push([arr1[i], arr2[j]])
        }
    }
    return product;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
const product = cartesianProduct(arr1, arr2);
console.log(product);