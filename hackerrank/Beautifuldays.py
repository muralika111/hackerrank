def beautifulDays(i, j, k):
    ar=[]
    bds=0
    def fun(x):
        while(x%10==0):
            x=x//10
        x="".join(list((reversed(str(x)))))
        x=int(x)
        return x
    
    for j in range(i,j+1):

        if(abs(j-fun(j))%k==0):
            bds+=1
    return bds
beautifulDays(20,23,6)