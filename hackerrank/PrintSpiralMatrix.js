//This code prints 2-D matrix in clockwise spiral pattern
arr=[
[1,2,3,4,5,3],
[6,7,8,9,0,7],
[11,12,1,1,4,6],
[34,5,4,3,2,4],
[5,6,4,5,6,2],
[4,5,6,7,6,5]]
r=6
c=6
m,n=0,0
l=0
p=0

while(m<r and n<c):
  for i in range(m,c):
    print(arr[m][i],end=" ")
  m+=1
  n=i
  for j in range(m,r):
    print(arr[j][n],end=" ")
  m=j
  n-=1
  
  for k in range(n,l-1,-1):
    print(arr[m][k],end=" ")
  m-=1
  n=k
  for h in range(m,p,-1):
    print(arr[h][n],end=" ")
  l+=1
  p+=1
  m=h
  n=l
  c-=1
  r-=1


