def gridSearch(G, P):
    co=0
    j=0
    i=0
   
    loc=-1
    while(j<r and i<R):
            if (P[j].find(G[i],loc+1)!=-1):
                if(i==0):
                    indeex=P[j].find(G[i],loc+1)
                   
                    co+=1
                    j+=1
                    i+=1
                    print(indeex)
                    
                    
                    
                    
                    
                    
                elif(P[j].find(G[i],loc+1)==indeex):
                    co+=1
                    j+=1
                    i+=1
                    
                else:
                    i-=1
                    j-=1
                    co=0
                    loc=indeex
                    if(i==0):
                      loc+=1
            else:
                if(i==0):
                    j+=1
                else:
                    i-=1
                    co=0
                    loc=-1
    print(co)
    if (co==R):
        return "YES"
    else:
        return"NO" 
r=4
R=2
print(gridSearch(["12","21"],["1234",
"4321",
"9999",
"9999"]))