let n=Number(prompt("Enter n"));
function pattern(n){
    if(n>=1){
        for(let i=0;i<n;++i){
            let cur="";
            for(let j=0;j<n;++j){
                cur=cur+'*';
            }
            console.log(cur);
        }
    }
}
pattern(n);