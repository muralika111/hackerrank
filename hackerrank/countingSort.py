
#This code sorts array using counting sort algorithm with time complexity(O(n))
def countingSort(arr):
    n=len(arr)
    arrr=[0]*max(arr)
    a=[0]*max(arr)
    for i in range(n):
        arrr[arr[i]]+=1
    for k in range(1,len(arrr)):
        arrr[k]+=arrr[k-1]
    for j in range(n):
        a[arrr[arr[j]]-1]=arr[j]
        arrr[arr[j]]-=1
    return a
'''test using this line.'''

print(countingSort([3,4,53,1,2]))