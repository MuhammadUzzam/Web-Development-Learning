let n=Number(prompt('Enter number: '));
function isprime(n){
    if(n<=1)    return false;
    for(let i=2;i*i<=n;++i){
        if(n%i==0)  return false;
    }
    return true;
}
if(isprime(n)){
    console.log("Prime");
}else{
    console.log("Not a prime");
}