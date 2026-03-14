def has23(nums):
  for i in range (len(nums)-1):
    if(nums[i]==2 or nums[i]==3):
      return True
    else:
      return False
  
