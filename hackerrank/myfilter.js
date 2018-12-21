Array.prototype.Myfilter=function(cbfun){
    let arr=[];
    for(let i of this){
        if(cbfun(i))
        arr.push(i);
    }
    return arr
}

var test=[1,2,3,4,5]
console.log(test.Myfilter((x)=>x%2==0))
