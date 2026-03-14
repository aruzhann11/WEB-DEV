if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    
    first_max = max(arr)
    arr = [x for x in arr if x != first_max]
    second_max = max(arr)
    print(second_max)