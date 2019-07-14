function isInteger(num) {
    return num % 1 === 0;
}
let result1 = isInteger(5);
console.log(result1);
let result2 = isInteger(5.1);
console.log(result2);