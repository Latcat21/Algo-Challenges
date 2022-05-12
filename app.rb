# // Add all numbers
# // return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS ex addAll(2,5,6,7) === 20

def addAll(*nums)
  total = 0

  nums.each do |num|
    total = total + num
  end
  
  return total
end

puts addAll(2,5,6,7)