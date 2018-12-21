var arr=[1,2,3,4,5,6]
var result=[]
var i=0
var j=0
var prod=1
for (let i of arr){
    while(j<arr.length){
        if(arr[j]==i) 
          j++;
        else{
            prod*=arr[j]
            j++;
        }
    }
    result.push(prod)
    prod=1;
    j=0;
    }


console.log(result);


