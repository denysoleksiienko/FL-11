let a1 = parseFloat(prompt('Please, enter your x coordination of "A1" point', ''));
let a2 = parseFloat(prompt('Please, enter your y coordination of "A2" point', ''));
let b1 = parseFloat(prompt('Please, enter your x coordination of "B1" point', ''));
let b2 = parseFloat(prompt('Please, enter your y coordination of "B2" point', ''));
let c1 = parseFloat(prompt('Please, enter your x coordination of "C1" point', ''));
let c2 = parseFloat(prompt('Please, enter your y coordination of "C2" point', ''));

let half = 2;

let x = (a1 + b1) / half;
let y = (a2 + a2) / half;

if (c1 === x && c2 === y) {
    console.log(true);
} else {
    console.log(false);
}