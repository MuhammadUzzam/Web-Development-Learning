let n=Number(prompt("Enter number: "));
function mul(n){
    for(let i=1;i<=10;++i){
        console.log(String(n), " X ",String(i), " = ",String(i*n));
    }
}
mul(n);