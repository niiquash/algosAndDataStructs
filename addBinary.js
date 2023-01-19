function addBinary(A, B) {
    let sum = '';
    // loop through each string concurrently
    // add the bits using XOR bitwise operator
    // loop indexes will start from right to left
    let i = A.length - 1;
    let j = B.length - 1;
    let carry = 0;
    while (i >= 0 || j >= 0) {
        // Remember that sum is a string which
        // we will be concatinating the results
        // of each bit summation
        // create new vars for each bit we loop to
        let a = A[i] ? A[i] : '0';
        let b = B[j] ? B[j] : '0';
        sum = String(a ^ b ^ carry) + sum;
        // For the conditions where a and b are equal but not c,
        // we will need to flip the bits for the carry
        if (a === b && a !== String(carry)) {
            carry = Number(!carry);
        }
        i--;
        j--;
    }
    // if carry is not 0, append it to the sum string
    return carry ? (String(carry) + sum) : sum;
}

console.log(addBinary('110110', '10101'))

/*
110110
 10101
------
1001011
*/