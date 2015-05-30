//Write an expression that calculates rectangle’s area by given width and height.
console.log('\nProblem 3: Rectangle area');

var width = [3, 2.5, 5],
	height = [4, 3, 5];

for (i=0; i<width.length; i += 1) {
	area(width[i], height[i]);
}

function area(width, height) {
	var area = width*height;
	console.log('The result of the multiplication is: ' + area);
}