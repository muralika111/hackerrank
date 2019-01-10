function convertToRoman(num) {
    var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    var result=""
    for(let i in decimalValue){
        while(decimalValue[i]<=num){
            result+=romanNumeral[i]
            num-=decimalValue[i]
        }

    

        }
    return result
    }


console.log(convertToRoman(36));