Array.prototype.Mymap=function(cbfun){
    let arr=[];
    for(let i of this){
        arr.push(cbfun(i));
    }
    return arr
}

var test=[1,2,3,4,5]
console.log(test.Mymap((x)=>x**2))
