var fs = require('fs');
var matches = JSON.parse(fs.readFileSync('matches.json', 'utf-8'));
obj={};
for(let i in matches){
    if (obj.hasOwnProperty(matches[i]["season"])){
        obj[matches[i]["season"]]+=1;
    }
    else{
        obj[matches[i]["season"]]=0;

    }

}
console.log(obj);