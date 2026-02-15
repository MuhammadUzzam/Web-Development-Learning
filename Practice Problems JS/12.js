function dup(){
    let duplicate=false;
    let arr=[];
    for(let i=0;i<5;++i){
        let x=Number(prompt("Enter Value ",i+1));
        for(let a in arr){
            if(a==x){
                duplicate=true;
            }
        }
        arr.push(x);
    }
    return duplicate;
}
if(dup()){
    console.log("DUPLICATES");
}else{
    console.log("ALL UNIQUE");
}
