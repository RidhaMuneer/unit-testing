function reverseString(string){
    let stack = [];
    for(let i = 0; i < string.length; i++) {
        stack.push(string.charAt(i));
    }
    let newString = '';
    for(let i = 0; i < string.length; i++){
        newString = newString + stack.pop();
    }
    return newString;
}
module.exports = reverseString;