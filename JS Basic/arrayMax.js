var arrayValues = [45, -81, 63, -98, 56, 35, 203];
console.log(arrayValues);
var max = 0;
for (let i = 0; i < arrayValues.length; i++) {
    var element = arrayValues[i];
    if(element > max){
        max = element;
    }
}
console.log(max);