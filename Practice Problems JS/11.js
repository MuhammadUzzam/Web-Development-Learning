let ch=prompt("Enter a character");
function ischar(ch){
    return ch[0]>='a'&&ch[0]<='z'||ch[0]>='A'&&ch[0]<='Z';
}
function isdigit(ch){
    return ch[0]>='0'&&ch[0]<='9';
}
function alphaOrDigOrSpec(ch){
    if(ch.length>1){
        console.log("Entered String is not a character");
    }else{
        if(ischar(ch)){
            console.log("Character");
        }else if(isdigit(ch)){
            console.log("Digit");
        }else{
            console.log("Special Character");
        }
    }
}
alphaOrDigOrSpec(ch);