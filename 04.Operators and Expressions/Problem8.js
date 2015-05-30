//Write an expression that calculates trapezoid's area by given sides a and b and height h.
console.log('\nProblem 8: Trapezoid area');

var a = [5, 2, 8.5, 100, 0.222],
	b = [7, 1, 4.3, 200, 0.333],
	h = [12, 33, 2.7, 300, 0.555];

for (var i = 0; i < a.length; i += 1) {
	console.log('The are is: ' + area(a[i],b[i],h[i]));
}

function area(a, b, h){
	return (((a+b)/2)*h);
}