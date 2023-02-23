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

console.log(palindrome("Mob"));

//Answer walkthrough
//1. turn string into array, reverse, and compare.

const isPalindrome = (str) => {
    return strRev = str.split('').reverse().join('') === str

}

console.log(isPalindrome("asdf"))

//2. Make a fxn that takes a str
//Take str and turn into an array called "word"
//take 2 empty arrays, named forward and backwards
//Make a loop: loops through the "word" array
    //push the current index into backwards
    //unshift the current index into forwards
//turn forwards and backwards into strings
//if forward backwards are equal, return true, else return false

function isPalindrome2(str) {
    let word = str.split('')
    let forwards = [];
    let backwards = [];
    for(let i = 0; i < word.length; i++) {
        backwards.push(word[i]);
        forwards.unshift(word[i]);
    }
    fString = forwards.join('');
    bString = backwards.toLocaleString('');
    if (fString === bString) {
        return true;
    //you don't need to else return false, because after a return, the fxn exits and false will become automatic, if outside fxn.
    }
    
    return false
}