# // Add all numbers
# // return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS ex addAll(2,5,6,7) === 20

def addAll(*nums)
  total = 0

  nums.each do |num|
    total = total + num
  end

  return total
end

# // Seek and Destroy
# // remove from the array whatever is in the folling arguments return the leftovers in an array
# // ex seekAndDestroy([2,3,4,6,6 'hello'], 2,6) == [3,4 'hello']
def seekAndDestroy(arr, *args)

  items = args
  final = []

  arr.each do |ele|
    if !items.include?(ele)
      final.push(ele)
    end
  end
  return final
  
end

puts seekAndDestroy([2,3,4,6,6, 'hello'], 2,6)