let n=Number(prompt("Enter number: "));
function factors(n){
    let arr=[];
    for(let i=2;i*i<=n;++i){
        if(n%i==0){
            arr.push(i);
            if(n/i!=i)
                arr.push(n/i);
        }
    }
    return arr;
}
console.log(factors(n));