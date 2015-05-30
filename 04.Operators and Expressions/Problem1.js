//Write an expression that checks if given integer is odd or even.
console.log('Problem 1: Odd or Even');

var b = [3, 2, -2, -1, 0];

for (var i=0; i < b.length; i += 1) {
	oddOrEven(b[i]);
}

function oddOrEven(a) {
	if (a%2 === 0) {
		console.log('false');
	} else {
		console.log('true');
	}
}
