


function isPrime(n){
    for(i=2; i < n; i++){
        if(n%i == 0){
            return'not a prime num';
            
        }
    
    }
    return"your Number Is a prime Number";
}
let result = isPrime(11); 
console.log(result);

