///1
function palindrome(str) {  
    const len = str.length;   
    for (let i = 0; i < len / 2; i++) {   
        if (str[i] !== str[len - 1 - i]) {  
          console.log( 'It is not palindrome'); 
            break;
          } else {
            console.log('palindrom')
            break;
        }
    }
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


/////5  couldn't write











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

















