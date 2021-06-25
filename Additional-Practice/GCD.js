let number1 = 75;
let number2 = 25;

while(number1 != number2){
    if(number1 > number2) {
        number1 -= number2;
    }
    else {
        number2 -= number1;
    }
}

console.log(`HCF is ${number1}`);