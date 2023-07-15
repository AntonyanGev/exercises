let arr= [45, 12, 3, 6, 17, 0]

/// even and odd numbers
function separate(arr) {
    let evenNumbers=[]
        let oddNumbers=[]
            for(let i=0;i<arr.length; i++) {
                if(arr[i] %2===0) {
                    evenNumbers.push(arr[i])
                } else {
                    oddNumbers.push(arr[i])
                }
            }
    return [evenNumbers, oddNumbers]
}


/// sum of the elements into array

function sum (arr) {
    let sum1=0
    for(let i=0; i<arr.length;i++) {
        sum1=sum1 +arr[i] 
    }
    return sum1
} 

///multilpication of array elements 

function multiplication1 (arr) {
    let multNumbers=1
    for(let i=0; i<arr.length-1;i++) {
        multNumbers= multNumbers* arr[i] 
    }
    return multNumbers
} 

///difference of the elements


function difference7(arr) {
    let dif=arr[0]
    for(let i=0; i<arr.length;i++) {
         if (arr[i]===0) {
        break;
        }
       dif= dif- arr[i+1] 
       
              }
    return dif
}

/// the second and probably more preferable solution
function difference(arr) {
    let dif = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        dif = dif - arr[i + 1];
    }
    return dif;
}

/// division

function calculateDiv(arr) {
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result /= arr[i];
    }
  }

  return result;
}

///the second and probably more preferable solution

function Division(arr) {
  let result = arr[0];
for (let i = 1; i < arr.length; i++) {
    result /= arr[i];
  }
     return result;
}

3 ///remove string
function removeString(str, removeStr) {
  return str.split(removeStr).join('');
}

4/// invert given object

function fo(obj) {
    let res={}
    for(let key of Object.values(obj)) {
      for(let key1 of Object.keys(obj)) {
        res[key]= key1
      }
    }
       return res
}

/// second solution with for in
function fo(obj) {
  let res = {};

  for (let key1 in obj) {
    let value = obj[key1];
    res[value] = key1;
  }

  return res;
}
5///Given two objects. Write a function that performs shallow compare.

function shallowComp(obj1, obj2) {
  let keysfirst = Object.keys(obj1);
  let keyssecond = Object.keys(obj2);

  if (keysfirst.length !== keyssecond.length) {
    return false;
  }

  for (const key of keysfirst) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
