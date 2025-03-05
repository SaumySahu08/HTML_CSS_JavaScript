function isPrime(n){
    let f=true;
    for(let i=2;i<=n;i++){
        if(n%i==0){
            f=false;
            break;
        }
    }
    return f;
    //return f ? "prime":"not prime";
}