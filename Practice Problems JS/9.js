let ch=prompt("Enter a character");
function character(ch){
    if(ch.length>1){
        console.log("Entered String is not a character");
    }else{
        if(ch[0]>='a'&&ch[0]<='z'||ch[0]>='A'&&ch[0]<='Z'){
            console.log("Alphabet");
        }else{
            console.log("Entered String is not an alphabet");
        }
    }
}
character(ch);