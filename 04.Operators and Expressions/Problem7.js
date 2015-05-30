//Write an expression that checks if given positive integer number n (n ≤ 100) is prime.
console.log('\nProblem 7: Is prime');

var a = [1, 2, 3, 4, 9, 37, 97, 51, -3, 0];

for (var i = 0; i < a.length; i += 1) {
	console.log(isPrime(a[i]));
}

function isPrime(number) {
	if (number < 2) {
		return false;
	}

	if (number > 100) {
		console.log('The number must be 100 or below it');
	}

	for (var m = 2; m <= Math.sqrt(number); m++) {
		if (!(number%m)) {
			return false;
		}
	}
	return true;
	}