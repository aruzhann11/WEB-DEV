def max_end3(nums):
  new=[]
  if(nums[0]>nums[-1]):
   new.append(nums[0])
   new.append(nums[0])
   new.append(nums[0])
  else:
   new.append(nums[-1])
   new.append(nums[-1])
   new.append(nums[-1])
  return new
