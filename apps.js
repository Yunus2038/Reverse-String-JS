
function reverseString(){
    let text = prompt(`Enter a word`)
    let rText = ""
    if (text.length == 1){
        return text;
    }else {
       for (let i = text.length-1;i>=0;i--){
        rText += text[i]
    } 
    }
    
    return text, rText
}
console.log(reverseString());