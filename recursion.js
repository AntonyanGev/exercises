//1 sum of elements rekursion
function rek1(arr, sum = 0, i = 0) {
    if (i < arr.length) {
        sum += arr[i];
        return rek1(arr, sum, i + 1);
    }

    return sum;
}


///2 reverse the number by recursion
function reverse(num, rev = 0) {
    if (num === 0) {
        return rev
    }
    let lastDigit = num % 10
    rev= rev* 10 + lastDigit;
    num = Math.floor(num / 10)

    return reverse(num, rev);
}

///3 replace pi to 3.14
function replacePi(str) {
    if (str.length === 0) {
        return str;
    } else if (str.substr(0, 2) === "pi") {
        return "3.14" + replacePi(str.substr(2));
    } else {
        return str[0] + replacePi(str.substr(1));
    }
}

///4  i have no idea how to solve


///5 

function flattenArray(arr) {
    let flattened = [];

    function recursiveFlatten(subArray) {
        for (let i = 0; i < subArray.length; i++) {
            if (Array.isArray(subArray[i])) {
                recursiveFlatten(subArray[i]);
            } else {

                flattened.push(subArray[i]);
            }
        }
    }


////6 Given a number. Write a function that calculates its sum of the digits and if that sum has
more than 1 digit find the sum of digits of that number. Repeat that process if needed
and return the result.
 
function digitSum(num) {
    while (num >= 10) {
        let sum = 0;
      
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum; 
    }
    return num;
}
