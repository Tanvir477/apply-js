for(let i=10; i>=1; i--){

}
//0! =1 
function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

let result = factorial(10);
console.log(result);