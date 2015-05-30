//Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5). //{0,0} is the centre and 5 is the radius
console.log('\nProblem 6: Point in circle');

var x = [0, -5, -4, 1.5, -4, 100, 0, 0.2, 0.9, 2],
	y = [1, 0, 5, -3, -3.5, -30, 0, -0.8, -4.93, 2.655];

for (var i = 0; i < x.length; i += 1) {
	console.log(isInside(x[i], y[i]));
}

function isInside (x, y) {
	return (x*x + y*y <= 5 * 5)
}
