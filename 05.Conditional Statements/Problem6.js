//Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
//Calculates and prints its real roots.
console.log('\nProblem 6: Quadratic equation');

function roots(){
	var a = document.getElementById('number1').value,
		b = document.getElementById('number2').value,
		c = document.getElementById('number3').value,
		D,
		x1,
		x2;

	D = (b*b) - (4*a*c);
	if (D > 0) {
		x1 = (-b - Math.sqrt(D))/(2*a);
		x2 = (-b + Math.sqrt(D))/(2*a);
		document.getElementById('result6').value = 'x1 = ' + x1 + '| x2 = ' + x2;
		console.log('x1 = ' + x1 + ' | x2 = ' + x2);
	}

	else if (D === 0){
		x1 = -b/(2*a);
		document.getElementById('result6').value = 'x1 = x2 = ' + x1;
		console.log('x1 = x2 = ' + x1);
	}

	else {
		document.getElementById('result6').value = 'no real roots';
		console.log('no real roots');
	}
}