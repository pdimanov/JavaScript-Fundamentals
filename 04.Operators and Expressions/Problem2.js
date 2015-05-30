//Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.
console.log('\nProblem 2: Divisible by 7 and 5');

var b = [3, 0, 5, 7, 35, 140];

for (var i=0; i<b.length; i += 1) {
	divBy7and5(b[i]);
}

function divBy7and5 (a) {
	if (a%5===0 && a%7===0) {
		console.log('true');
	} else {
		console.log('false');
	}
}