//Sort 3 real values in descending order.
//Use nested if statements.
//Note: Don’t use arrays and the built-in sorting functionality.
console.log('\nProblem 4: Sort 3 numbers');

var a = [5, -2, -2, 0, -1.1, 10, 1],
	b = [1, -2, 4, -2.5, -0.5, 20, 1],
	c = [2, 1, 3, 5, -0.1, 30, 1];

for(var i = 0; i < a.length; i += 1){
	descOrder(a[i], b[i], c[i]);
}

function descOrder(a, b, c){
	if(a >= b){
		if (b >= c){
			console.log(a + ' ' + b + ' ' + c);
		} else if(a >= c && c >= b) {
			console.log(a + ' ' + c + ' ' + b);
		} else if(c >= a) {
			console.log(c + ' ' + a + ' ' + b);
		}
	}

	else if(b >= a){
		if(a >= c){
			console.log(b + ' ' + a + ' ' + c);
		} else if(c >= a && b >= c){
			console.log(b + ' ' + c + ' ' + a);
		} else if(c >= b){
			console.log(c + ' ' + b + ' ' + a);
		}
	}
}