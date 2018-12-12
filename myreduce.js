Array.prototype.Myreduce=function(cbfun){
    let ans=1;
    for(let i of this){
        ans=cbfun(ans,i);
    }
    return ans
}

var test=[1,2,3,4,5]
console.log(test.Myreduce((x,y)=>{
    return x*y;
}))
