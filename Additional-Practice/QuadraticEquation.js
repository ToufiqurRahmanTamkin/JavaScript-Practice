const a = 10;
const b = 9;
const c = 3;
let val1, val12;
const discriminant = (b*b)-4*a*c;

if (discriminant > 0) {
    val1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    val12 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`The roots of quadratic equation are ${val1} and ${val12}`);
}
else if (discriminant == 0) {
    val1 = val12 = -b / (2 * a);
    console.log(`The roots of quadratic equation are ${val1} and ${val12}`);
}
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}