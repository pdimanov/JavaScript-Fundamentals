//Write a script that finds the biggest of three numbers.
//Use nested if statements.
console.log('\nProblem 3: The biggest of Three');

var a = [5, -2, -2, 0, -0.1],
	b = [2, -2, 4, -2.5, -0.5],
	c = [2, 1, 3, 5, -1.1];

for(var i = 0; i < a.length; i += 1){
	theBiggest(a[i], b[i], c[i]);
}

function theBiggest(a, b, c){
	if (a >= b) {
		if (a >= c){
			console.log('The biggest number is: ' + a);
		}
		if (c > a){
			console.log('The biggest number is: ' + c);
		}
	}

	if (b > a) {
		if (b >= c){
			console.log('The biggest number is: ' + b);
		}
		if (c > b){
			console.log('The biggest number is: ' + c);
		}
	}
}