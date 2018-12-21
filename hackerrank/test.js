function pickingNumbers(a) {
    // Write your code here
    var c = 1
    var arr = []
    var narr=[]
    var d=0;
    a.sort((a, b) => a - b);
    console.log(a)
    for (let i=0;i<a.length;i++) {
        for (var j=i;j<a.length;j++) {
            
            if (i != j && (a[i] - a[j] == -1 || a[i] - a[j] == 0)) {
                c++
                
            }
            
        }
        if(c>d) d=c
        c=1

        
    }
    return d+1

}
console.log(pickingNumbers([1,2,3,97,98,99]));
