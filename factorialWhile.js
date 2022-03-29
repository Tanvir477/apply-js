var i = 1;
let factorial =1;
while(i<=10){
    factorial=factorial*i;
    // console.log(i, factorial);
    i++;
}
console.log(factorial);


//function

function factorial9(n){
    var i = 1;
    let factorial3 =1;
    while(i<=n){
    factorial3 = factorial3*i;
    i++;
    }
return factorial3;
}

let fact = factorial9(5);
console.log(fact);