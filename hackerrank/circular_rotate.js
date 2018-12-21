function circularArrayRotation(a, k, queries) {

    if(k>a.length) k=k%a.length
    var aa = a.splice(a.length - k, k + 1);
    a.unshift(...aa)
    console.log(a)
    return queries.map((x) => {
        return a[x];
    });


}
console.log(circularArrayRotation([1,2,3,4,5],6,[0,1,2]));