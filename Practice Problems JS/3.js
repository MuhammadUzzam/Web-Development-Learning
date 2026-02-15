let n=Number(prompt("Enter number: "));
let x=Number(prompt("Enter x: "));
function mul(n,x){
    for(let i=1;i<=x;++i){
        console.log(String(n), " X ",String(i), " = ",String(i*n));
    }
}
mul(n,x);
