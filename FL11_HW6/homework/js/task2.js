let a = parseFloat(prompt('Please, enter the first length of the triangle side (A)', '')),
    b = parseFloat(prompt('Please, enter the second length of the triangle side (B)', '')),
    c = parseFloat(prompt('Please, enter the third length of the triangle side (C)', ''));

if (a + b > c && b + c > a && a+ c > b) {
	if (a === b && b === c) {
		console.log('Eequivalent triangle');
	} else if (a === b || b === c || c === a) {
		console.log('Isosceles triangle');
	} else {
		console.log('Normal triangleconst');
	}
} else {
    console.log('Triangle doesn’t exist');
}
