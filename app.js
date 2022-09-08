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

// Missing letters
// find the missing letter in the passed letter range and return it. if all letters are present, return undefined
//ex
//"abce" == "d"
// "abcdefghjklno" == "i"

function missingLetters(str){
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  let firstChar = str[0]
  let compareInd = alpha.indexOf(firstChar);
  let compareArr = alpha.substring(compareInd, str.length).split('')
  let strArr = str.split('')
  
  let final 
  for(let i = 0; i < strArr.length; i++ ){
    console.log(compareArr[i], strArr[i])
  }
  
}

// Find the missing number in a given integer array of 1 to 100
// Return: integer — the missing number in the array

function missingNum(arr){

  let sortedArr = arr.sort((a, b) => a - b)
  for(let i = 0 ; i < sortedArr.length; i++){
    if( sortedArr[i + 1] - sortedArr[i]  !== 1){
      return sortedArr[i] + 1
    }
  }
}

// Find a duplicate number in an array of integers
// Return: integer — the duplicate number
// Assumptions: if no duplicate is found, return false;
function dupNum(arr){
  let hashMap = {}
  for(let i = 0; i < arr.length; i++){
    if(!hashMap[arr[i]]){
      hashMap[arr[i]] = 0
    }
     hashMap[arr[i]]++
  }

  let hashVals = Object.values(hashMap);

  const isOne = (currentValue) => currentValue === 1;

  if( hashVals.every(isOne)  ){
      return false;
    }

  for(let i in hashMap){
    if(hashMap[i] === 2){
      return i;
    }
   }
  }

//   Find the largest and smallest number in an unsorted array of integers
// Return: object — containing value of min and max
function largestAndSmallest(arr){
  let returnObj = {}

  returnObj['smallest'] = Math.min(...arr);
  returnObj['largest'] = Math.max(...arr);

  return returnObj;
}

// Return an array showing the cumulative sum at each index of an array of integers

// Return: array — integers showing the cumulative sum at each index

function cumulativeSum(arr){
  let result = [arr[0]];
  
  for(let i = 1; i < arr.length; i++) {
    result.push(arr[i] + result[i-1]);
  } 
  
  return result;
}

// Find all duplicate numbers in an array with multiple duplicates
// Return: array — containing all duplicates found or empty array if none are found
function allDuplicate(arr){
  let hashMap = {}
  for(let i = 0; i < arr.length; i++){
    if(!hashMap[arr[i]]){
      hashMap[arr[i]] = 0
    }
    hashMap[arr[i]]++
  }
  let final = []

  for(let i in hashMap){
    if(hashMap[i] > 1){
      final.push(parseInt(i))
    }
  }
  return final
}

// Remove all duplicates from an array of integers
// Return: array — without any duplicates
function removeAllDuplicates(arr){
  let hashMap = {}
  for(let i = 0; i < arr.length; i++){
    if(!hashMap[arr[i]]){
      hashMap[arr[i]] = 0
    }
    hashMap[arr[i]]++
  }
  let final = []

  for(let i in hashMap){
   final.push(parseInt(i))
  }
  return final
}

// Frequency counter
function same(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
 for(let key in frequencyCounter1){
   if(!(key ** 2 in frequencyCounter2)){
    return false
   }
   if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
     return false
   }
 }
 return true
}

// Odd counter
// count the number of odd numbers in an Array
// [1,2,3,4,5,6,7,8,9] => 6
function oddCounter(arr){
  let count = 0;
  arr.forEach((ele) => {
    if(ele % 2 === 1){
      count++
    }
  })
  return count
}
console.log(oddCounter([1,2,3,4,5,6,7,8,9]))