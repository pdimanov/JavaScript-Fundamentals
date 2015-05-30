//Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
//The bits are counted from right to left, starting from bit #0.
//The result of the expression should be either 1 or 0.
console.log('\nProblem 5: Third bit')

var b = [5, 8, 0, 15, 5343, 62241];

for (var i = 0; i < b.length; i += 1) {
	console.log('bit #3 is: ' + bitCheck(b[i]));
}

function bitCheck(number) {
	return ((number >> 3) & 1);
}