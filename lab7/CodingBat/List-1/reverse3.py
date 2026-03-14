def reverse3(nums):
    reverse = []
    i = len(nums) - 1
    while i >= 0:
        reverse.append(nums[i])
        i -= 1
    return reverse