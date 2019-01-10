def absolutePermutation(n, k):
    arr=[]
    if k == 0:
        return list(range(1, n+1))
    elif (n/k) % 2 != 0:
        return ["-1"]
    else:
        add = True
        
        for i in range(1,n+1):
            if(add):
                arr.append(i+k)
            else:
                arr.append(i-k)
            if (i%k==0):
                if add:
                    add=False
                else:
                    add=True
        return arr
absolutePermutation(10,5)