def miniMaxSum(arr):
    mn=min(arr)
    mx=max(arr)
    arr1=arr[:]
    arr2=arr[:]
    arr1.pop(arr.index(mn))
    arr2.pop(arr.index(mx))
    print(sum(arr2),end=" ")
    print(sum(arr1),end=" ")

