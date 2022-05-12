// Add all numbers
// return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS ex addAll(2,5,6,7) === 20
function addAll(...args){
  let nums = args
  let total = nums.reduce((a, b) => {
    return a + b
  }, 0)
 
  return total
}
console.log(addAll(2,5,6,7))