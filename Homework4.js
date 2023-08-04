function stringIncludes(str, substr) {
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
