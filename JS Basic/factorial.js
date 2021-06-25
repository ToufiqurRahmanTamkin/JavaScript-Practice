// var i=1;
// var factorial = 1;
// while(i<=10){
//     factorial *= i;
//     i++;
// }
// console.log(factorial);

function factFunction(n) {
    var i=1;
    var factorial = 1;
    while(i<=n){
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

console.log(factFunction(4));