///1  function stringIncludes(str, substr) {
    for (let i = 0; i <= str.length - substr.length; i++) {
        let found = true;
        
        for (let j = 0; j < substr.length; j++) {
            if (str[i + j] !== substr[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return true;
        }
    }
    
    return false;
   }

////2 indexOf

function findIndexOf(str, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}



///3 replace
function changer(input, search, replacement) {
    let result = "";
    
    for (let i = 0; i < input.length;) {
        if (input.substring(i, i + search.length) === search) {
            result += replacement;
            i += search.length;
        } else {
            result += inputS[i];
            i++;
        }
    }

    return result;
}


///3 replaceAll

function replaceAll(input, str, replacement) {
    let result = '';
    let i = 0;

    while (i < input.length) {
        if (input.substring(i, i + str.length) === str) {
            result += replacement;
            i += str.length;
        } else {
            result += input[i];
            i++;
        }
    }

    return result;
}


//arr includes

///1. includes
function includes(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

///2  indexOf
function findIndexOf(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

//3  Slice ??
