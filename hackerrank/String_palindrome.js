//Function determines how many conversion at the rate of -1 can be done to make a given string palindrome//
/*eg. abcd --> abcb-->abca-->abbc =4*/
function strpal(s){
    rev=s.split("").reverse().join("")
    n=s.length
    
    c=0
    if( rev==s){
        return 0
    }
    i=0
    j=n-1
    while(i<Math.floor(n/2)){
        c+=Math.max(s.charCodeAt(i),s.charCodeAt(j))-Math.min(s.charCodeAt(i),s.charCodeAt(j))
        i+=1
        j-=1
    }
    return c
}

console.log(strpal("abcd"))