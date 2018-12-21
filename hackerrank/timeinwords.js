var timeclass = [" o' clock", " minute past ", "quarter past ", "half past ", "minutes to ", "quarter to "];
var obj = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10,
    "eleven": 11,
    "twelve": 12,
    "thirteen": 13,
    "fourteen": 14,
    "fifteen": 15,
    "sixteen": 16,
    "seventeen": 17,
    "eighteen": 18,
    "nineteen": 19,
    "twenty": 20,
    "twenty one": 21,
    "twenty two": 22,
    "twenty three": 23,
    "twenty four": 24,
    "twenty five": 25,
    "twenty six": 26,
    "twenty seven": 27,
    "twenty eight": 28,
    "twenty nine": 29
}
var retstr;

function timeInWords(h, m) {
    if (m == 0 || m == 15 || m === 30 || m == 45||m==1) {
        switch (m) {
            case (0): retstr = Object.keys(obj)[h] + timeclass[0];
                break;
            case (1): retstr = Object.keys(obj)[m] + timeclass[1] + Object.keys(obj)[h];
                break;
            
            case (15): retstr = timeclass[2] + Object.keys(obj)[h];
                break;
            case (30): retstr = timeclass[3] + Object.keys(obj)[h];
                break;
            case (45): retstr = timeclass[5] + Object.keys(obj)[h + 1];
                break;

        };
        return retstr;
    }
    else if (m < 30) {
        return Object.keys(obj)[m] + " minutes past " + Object.keys(obj)[h];

    }
    else {
        return Object.keys(obj)[60 - m] + " minutes to " + Object.keys(obj)[h + 1];
    }


}
//Trying one test case
console.log(timeInWords(2,45));