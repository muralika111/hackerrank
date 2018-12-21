function climbingLeaderboard(scores, alice) {
    var set1 = new Set(scores);
    var n=[...set1]
    var newarray = [...set1];
  
    n.reverse();
    console.log(newarray);
    var ranks = [];
    var j = 0;
    for (let i of alice) {
        while (j <= n.length - 1) {
            if (i < n[j]) {
                ranks.push(newarray.indexOf(n[j])+2)
                j++;
               
                break;
            }
            else if (i == n[j]) {
                ranks.push((newarray.indexOf(n[j]) + 1));
                j++;
                
                break;
            }
            else if (i > n[n.length - 1]) {
                ranks.push(1)
                j++;
                
                break;
            }
            j++
        }
       
    }
            
    return ranks


}
var a=[100,100,50,40,40,20,10];
var b=[5,25,50,120]
console.log(climbingLeaderboard(a,b));
