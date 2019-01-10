function encryption(s) {
    s=s.split(" ").join("")
    var l = Math.ceil(Math.sqrt(s.length))
    var arr=[]
    var n=l
    var i=0

    while(n <s.length){
        arr.push(s.substring(i,n))
        i=n
        n+=l
    
    }
    console.log(i)
    console.log(n)
    console.log(s)
    arr.push(s.substring(i,s.length))
    i=0
    
    var p=""
    while(i <l){
        
            for(let k in arr){
                if(arr[k][i]!=undefined){
                    p+=arr[k][i]
                
                }
                else{
                    break;
                }
                

            }
            p+=" "
            i++;
        }

    
    return p    


}
console.log(encryption("feedthedog"))