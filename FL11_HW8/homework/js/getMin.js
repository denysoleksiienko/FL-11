function getMin() {
    let x = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (x > arguments[i]) {
            x = arguments[i];
        }
    }
    return x;
}
let result = getMin(3, 0, -3);
console.log(result);