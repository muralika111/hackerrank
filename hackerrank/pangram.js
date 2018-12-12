var st = "abcdefghijklmnopqrstuvwxyz"
var sta=st.split("")


// Complete the pangrams function below.
function pangrams(s) {
    s=s.toLowerCase()
    for (let i in s) {
        if(sta.indexOf(s[i])!=-1)
            sta.splice(sta.indexOf(s[i]),1)
    }

    if (sta.length==0)
        return "pangram"
    
    else
    return "not pangram";
    }

  
// checking the outputs
console.log(pangrams("abcdefghijklmnopqrstuvwxyz"));