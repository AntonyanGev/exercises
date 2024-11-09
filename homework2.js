///1
function palindrome(str) {  
    const len = str.length; 
    let isPalindrome=true
    for (let i = 0; i < len / 2; i++) {   
        if (str[i] !== str[len - 1 - i]) {  
           isPalindrome= false 
            break;
          } else {
           isPalindrome=true
        
        }
    }
    return isPalindrome
}



function foo (str){
let ispolindrome=true
    for(let i=0;i<str.length/2; i++){

        if(str[i]!== str[str.length-1-i]){
         ispolindrome= false
            break
        } else {
              ispolindrome=true 
        }
   
    }
    return ispolindrome
}




////the second solution of this exercise
function palindrome(str) {
    for(let i=0; i<str.length;i++) {
        if(str[i]!== str[str.length-1-i]) {
            console.log('no')
           break
        } else {
            console.log('yes')
           break;
      }
   }
}


/// third solution of this exercise. easy one

function pol(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result === str;
}

///2--couldn't write



///3.
function printNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += j;
        }
        console.log(pattern);
    }
    for (let i = num - 1; i >= 1; i--) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += j;
        }
        console.log(pattern);
    }
}

///4

function showPattern(param) {
    for (let i = 1; i <= param; i++) {
        let spaces = '';
        for (let j = 1; j < i; j++) {
            spaces += ' ';
        }
        console.log(spaces + '*');
    }
}





////6

function Pattern (num1, num2) {
    for (let i = 1; i <= num1; i++) {
        let pattern = '';
        for (let j = 1; j <= num2; j++) {
            pattern += "* ";
        }
        console.log (pattern);
    }
}

















