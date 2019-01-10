function convertToRoman(num) {
    var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    var result=""
    var i=0
    while(i<13){
        if(decimalValue[i]<=num){
            result+=romanNumeral[i]
            num-=decimalValue[i]
            
        }
        else{
            i+=1
        }

    

        }
    return result
    }


console.log(convertToRoman(36));