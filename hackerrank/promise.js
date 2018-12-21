var promise=new Promise(function(resolve, reject){
    resolve(5);

});
promise.then(first).then(second).then(third).then(function(resp){
    console.log(resp)
});

function first(value){
    return value+1;
}
function second(value){
    return value+2;
}
function third(value){
    return value+3;
}
