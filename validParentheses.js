var validParentheses = function (s) {
    // s = s.split("");
    // let validity = [];
    // for (let i = 0; i < s.length; i++) {
    //     switch (s[i]) {
    //         case "(":
    //             validity.push(s[i]);
    //             break;
    //         case ")":
    //             if (validity.length && validity[validity.length - 1] == "(") {
    //                 validity.pop();
    //             } else {
    //                 return false;
    //             }
    //             break;
    //         case "[":
    //             validity.push(s[i]);
    //             break;
    //         case "]":
    //             if (validity.length && validity[validity.length - 1] == "[") {
    //                 validity.pop();
    //             } else {
    //                 return false;
    //             }
    //             break;
    //         case "{":
    //             validity.push(s[i]);
    //             break;
    //         case "}":
    //             if (validity.length && validity[validity.length - 1] == "{") {
    //                 validity.pop();
    //             } else {
    //                 return false;
    //             }
    //             break;
    //         default:
    //             console.log('Sorry')
    //     }
    // }
    // if (validity.length) {
    //     return false;
    // } else {
    //     return true;
    // }
    while (s.includes("()") || s.includes("[]") || s.includes("{}")) {
        s = s.replace("()", "").replace("[]", "").replace("{}", "")
    }
    if (s.length) {
        return false
    }
    return true
};

console.log(validParentheses("([]{}{[]})"))