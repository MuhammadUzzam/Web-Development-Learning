let ch=prompt("Enter a character");
function ischar(ch){
    return ch[0]>='a'&&ch[0]<='z'||ch[0]>='A'&&ch[0]<='Z';
}
function character(ch){
    if(ch.length>1){
        console.log("Entered String is not a character");
    }else{
        if(ischar(ch)){
            if(ch[0]>='a'&&ch[0]<='z'){
                console.log("Lowercase character");
            }else{
                console.log("Uppercase character");
            }
        }else{
            console.log("Entered String is not an alphabet");
        }
    }
}
character(ch);