// Write your code below
//This requires an if else statement with a boolean

const palindrome = str => {
    for(i = 0; i < str.length; i++) {
        for(j = str.length-1; j > 0; j--){
            if(str[i] === str[j]){
                return true;
            }else{
                return false;
            }
        }
    }
}

console.log(palindrome("mom"));