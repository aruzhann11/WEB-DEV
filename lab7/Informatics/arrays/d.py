n = int(input())
a = list(map(int, input().split()))
count=0
for i in range(0, n):
    if(a[i-1]<a[i]):
       count+=1
print(count)