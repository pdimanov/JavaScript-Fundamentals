//Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
//Use a sequence of if operators.
console.log('\nProblem 2: Multiplication Sign');

var a = [5, -2, -2, 0, -1],
	b = [2, -2, 4, -2.5, -0.5],
	c = [2, 1, 3, 4, -5.1];

for(var i = 0; i < a.length; i += 1) {
	multiSign(a[i], b[i], c[i]);
}

function multiSign(a, b, c) {
	if ((a > 0 && b > 0 && c > 0) || (a > 0 && b < 0 && c < 0) || (a < 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c < 0)) {
		console.log('+');
	}
	if ((a > 0 && b > 0 && c < 0) || (a > 0 && b < 0 && c > 0) || (a < 0 && b > 0 && c > 0) || (a < 0 && b < 0 && c < 0)) {
		console.log('-');
	}
	if (a === 0 || b === 0 || c === 0) {
		console.log('0');
	}
}