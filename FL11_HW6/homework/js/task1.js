let a1 = parseFloat(prompt('Please, enter your x coordination of "A1" point', '')),
    a2 = parseFloat(prompt('Please, enter your y coordination of "A2" point', '')),
    b1 = parseFloat(prompt('Please, enter your x coordination of "B1" point', '')),
    b2 = parseFloat(prompt('Please, enter your y coordination of "B2" point', '')),
    c1 = parseFloat(prompt('Please, enter your x coordination of "C1" point', '')),
    c2 = parseFloat(prompt('Please, enter your y coordination of "C2" point', ''));

const half = 2;

let x = (a1 + b1) / half,
    y = (a2 + b2) / half;

if (c1 === x && c2 === y) {
    console.log(true);
} else {
    console.log(false);
}