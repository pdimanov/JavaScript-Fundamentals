//Write an expression that checks for given integer if its third digit (right-to-left) is 7.
console.log('\nProblem 4: Third digit')

var b = [5, 701, 1732, 9703, 877, 777877, 9999799];

for (var i = 0;  i<b.length; i += 1) {
	digitSev(b[i]);
}

function digitSev(a) {
	if (((a/100)%10 | 0) === 7) {
		console.log('true');
	} else {
		console.log('false');
	}
}