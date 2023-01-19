var romanToInt = function (s) {
    // let result = 0;
    // // set the rules for roman numerals
    // let roman = new Map();
    // roman.set("I", 1);
    // roman.set("V", 5);
    // roman.set("X", 10);
    // roman.set("L", 50);
    // roman.set("C", 100);
    // roman.set("D", 500);
    // roman.set("M", 1000);
    symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    // get the digits from the input
    s = s.split("");
    // traverse the array
    // let i = 0;
    // while (i < s.length) {
    //     if (s[i] == "I" && (s[i + 1] == "V" || s[i + 1] == "X")) {
    //         result += roman.get(s[i + 1]) - roman.get(s[i])
    //         i += 2;
    //     } else if (s[i] == "X" && (s[i + 1] == "L" || s[i + 1] == "C")) {
    //         result += roman.get(s[i + 1]) - roman.get(s[i])
    //         i += 2;
    //     } else if (s[i] == "C" && (s[i + 1] == "D" || s[i + 1] == "M")) {
    //         result += roman.get(s[i + 1]) - roman.get(s[i])
    //         i += 2;
    //     } else {
    //         result += roman.get(s[i])
    //         i++;
    //     }
    // }
    // return result;
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (symbols[s[i]] < symbols[s[i + 1]]) {
            result -= symbols[s[i]]
        } else {
            result += symbols[s[i]]
        }
    }
    return result;
};


console.log(romanToInt("MCMXCIV"))