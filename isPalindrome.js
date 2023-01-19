var isPalindrome = function (x) {
    let y = x.toString();
    y = y.split("");
    y = y.reverse();
    y = y.join("");
    if (y == x) {
        return true;
    }
    return false
};

console.log(isPalindrome(121))