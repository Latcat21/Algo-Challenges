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

//sort by height 
// some people are standing in a row in a park, there are trees between them which cannot be moved. your task is to rearrange the people by the their heights in a non-descending order without moving the treets
// ex.
// a = [-1,150, 190, 170, -1,-1,160,180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]
function sortByHeight(arr){
  const arr1 = [];
  const arr2 = [];

  arr.forEach((ele, i) => {
    if(ele === -1){
      arr1.push(i)
      }else{
      arr2.push(ele)
    }
  });

 let sortedArr2 = arr2.sort((a, b) => a - b);
 
 arr1.forEach((val, i) => sortedArr2.splice(arr1[i], 0, -1));

 return sortedArr2


}
console.log(sortByHeight([-1,150, 190, 170, -1,-1,160,180]))

