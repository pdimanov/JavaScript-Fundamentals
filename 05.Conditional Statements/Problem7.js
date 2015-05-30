//Write a script that finds the greatest of given 5 variables.
//Use nested if statements.
console.log('\nProblem 7: The biggest of five numbers');

var a = [5, -2, -2, 0, -3],
	b = [2, -22, 4, -2.5, -0.5],
	c = [2, 1, 3, 0, -1.1],
	d = [4, 0, 2, 5, -2],
	e = [1, 0, 0, 5, -0.1],
	biggest;

for (var i = 0; i < a.length; i += 1){
	theBiggestOf5(a[i], b[i], c[i], d[i], e[i]);
}

function theBiggestOf5(a, b, c, d, e) {
	if(!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d) && !isNaN(e) && a !== '' && b !== '' && c!== '' && d !== '' && e !== ''){
		if (a > b){
			biggest = a;
		} else {
			biggest = b;
		}
		if (c > biggest){
			biggest = c;
		}
		if (d > biggest){
			biggest = d;
		}
		if (e > biggest){
			biggest = e;
		}
		console.log('The biggest number is: ' + biggest);
	} else {
		console.log('Not a valid number');
	}
}