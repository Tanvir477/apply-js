let factorial = 1;

for(let i=1;i<=10; i++){
    factorial= factorial * i;
    
    console.log(i ,factorial);
}

function  factorial1(n){
    let factorial = 1;

for(let i=1;i<=n; i++){
    factorial= factorial * i;
    }
    return factorial;

}
let fact = factorial1(5);

console.log(fact);



