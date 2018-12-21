function findDigits(n) {
    var arr = n.toString().split('')
    var count = 0
    console.log(arr)
    return arr.reduce((count,x) => {
        if (n % parseInt(x) == 0)
            count++;
        return count;

    });


} console.log(findDigits(12))