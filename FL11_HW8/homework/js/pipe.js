function pipe(num) {
    for (let i = 1; i < arguments.length; i++) {
        num = arguments[i](num);
    }
    return num;
}
function addOne(x) {
    return x + 1;
}
let result1 = pipe(1, addOne);
console.log(result1);
let result2 = pipe(1, addOne, addOne);
console.log(result2);