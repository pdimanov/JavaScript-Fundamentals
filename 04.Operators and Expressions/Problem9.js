//Write an expression that checks for given point P(x, y) if it is within the circle K( (1,1), 3)
//and out of the rectangle R(top=1, left=-1, width=6, height=2).
console.log('\nProblem 9: Point in Circle and outside Rectangle');

var x = [1, 2.5, 0, 2.5, 2, 4, 2.5, 2, 1, -100],
	y = [2, 2, 1, 1, 0, 0, 1.5, 1.5, 2.5, -100];

for (var i=0; i<x.length; i += 1){
	console.log(isInsideCircle(x[i], y[i], 1, 1, 3) && isOutsideRectangle(x[i], y[i], 1, -1, -1, 5));
}

function isInsideCircle(x, y, cx, cy, r){
    return (x - cx) * (x - cx) + (y - cy) * (y - cy) < r * r;
}

function isOutsideRectangle(x, y, top, bottom, left, right){
    return !(x >= left && x <= right && y <= top && y >= bottom);
}