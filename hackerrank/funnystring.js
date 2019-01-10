function funnyString(s) {
    a=s
    b=s.split("").reverse().join("")
    console.log(b)
    var arr=[]
    var arr1=[]

    
    for (let i=0;i<a.length-1;i++){
        arr.push(Math.abs((a.charCodeAt(i+1)-a.charCodeAt(i))))
        arr1.push(Math.abs((b.charCodeAt(i+1)-b.charCodeAt(i))))

        /*if((a.charCodeAt(i+1)-a.charCodeAt(i))!==(b.charCodeAt(i+1)-b.charCodeAt(i))){
            return "Not Funny"
                
    }*/ 
        }
        console.log(arr)
        console.log(arr1)
        if(JSON.stringify(arr1)!==JSON.stringify(arr)){
            return "Not Funny"
        }
        
        return "Funny"
    



}
console.log(funnyString("acxz"));