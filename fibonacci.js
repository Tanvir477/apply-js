
//iterative way

function fibonacci(n){
    var fibo= [0, 1 ];
 fibo[2]= fibo[2-1] + fibo[2-2];

for(let i=2; i<=n; i++ ){
    fibo[i]= fibo[i-1] + fibo[i-2];
    // console.log(fibo[i], fibo[i-1], fibo[i-2]); 
}
return fibo;
}

let result = fibonacci(10);
console.log(result);


//recursive

function fibonacci1(n){
    if(n ==0 ){
        return 0;
    }
    if( n == 1){
        return 1; //stoping condition
    }
    else {
        return fibonacci1(n-1) + fibonacci1(n-2);
    }
}
let result1 = fibonacci1(10);
console.log(result1);


//fibonacci series recursive

function fibonacci2(n){
    if(n ==0 ){
        return 0;
    }
    else if( n == 1){
        return [0, 1];
    }
    else {

        let fibo = fibonacci2(n-1);
        let nextElemnt = fibo[n-1] + fibo[n-2];  
        fibo.push(nextElemnt);
        return fibo;
    }
}
let result2 = fibonacci2(10);
console.log(result2);

