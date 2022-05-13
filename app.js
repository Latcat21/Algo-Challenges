// Add all numbers
// return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS ex addAll(2,5,6,7) === 20
function addAll(...args){
  let nums = args
  let total = nums.reduce((a, b) => {
    return a + b
  }, 0)
 
  return total
}

// Seek and Destroy
// remove from the array whatever is in the folling arguments return the leftovers in an array
// ex seekAndDestroy([2,3,4,6,6 'hello'], 2,6) == [3,4 'hello']
function seekAndDestroy(arr,...args){
  let final = []
  
  for(let i = 0; i <= arr.length; i++){
    if(!args.includes(arr[i]) && arr[i] !== undefined){
      final.push(arr[i])
    }
  }
  return final
}


console.log(seekAndDestroy([2,3,4,6,6, 'hello'], 2, 6))
