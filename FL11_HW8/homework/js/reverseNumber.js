function reverseNumber(num) {
    let x = 0;
    while (num !== 0) {
        x *= 10;
        x += num % 10;
        num -= num % 10;
        num /= 10;
    }
    return x;
}
let result1 = reverseNumber(123);
console.log(result1);
let result2 = reverseNumber(-456);
console.log(result2);
let result3 = reverseNumber(10000);
console.log(result3);