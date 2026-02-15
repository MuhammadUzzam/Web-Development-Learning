sentence=prompt("Enter Sentence");
function is_vowel(word){
    return word=='a'||word=='e'||word=='i'||word=='o'||word=='u'||word=='A'||word=='E'||word=='I'||word=='O'||word=='U';
}
function count_vowels(sentence){
    let res=0;
    for(let word of sentence){
        if(is_vowel(word))  res++;
    }
    return res;
}
console.log(count_vowels(sentence));