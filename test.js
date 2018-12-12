function diagonalDifference(arr) {
    var a = [];
    var b = [];
    var r = 0;
    var c = 0;
    var c1 = 3;
    var r1 = 0;


    for (let i in arr) {
        for (let j in i) {

            if (i == r && j == c && r < arr.length && c < arr[i].length) {
                a.push(arr[i][j]);
                r++;
                c++;


            }
            if (i == r1 && j == c1 && r1 < arr.length && c1 >= 0) {
                b.push(arr[i][j]);
                r1--;
                c1--;
            }

        }
    }
    console.log(a)
    a = a.reduce((x, y) => {
        return x + y;
    })
    b = b.reduce((x, y) => {
        return x + y;
    })
    return Math.abs(a - b);
    console.log(c1);
}
var array1=[[1,2,3],[1,2,3],[1,3,4]]
console.log(diagonalDifference(array1));
