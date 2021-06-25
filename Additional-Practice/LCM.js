let gcd;

const number1 = 31;
const number2 = 29;

for (let i = 1; i <= number1 && i <= number2; i++) {
    
    if( number1 % i == 0 && number2 % i == 0) {
        gcd = i;
    }
}

let lcm = (number1 * number2) / gcd;

console.log(`gcd of ${number1} and ${number2} is ${lcm}.`);