//Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
//As a result print the values a and b, separated by a space.
console.log('Problem 1: Exchange if greater');

var a = [5, 3, 5.5],
	b = [2, 4, 4.5];

for(var i=0; i<a.length; i += 1) {
	ifGreater(a[i], b[i]);
}

function ifGreater(t, d){
	if(d>t){
		var c = t;
		t = d;
		d = c;
		console.log(d + ' ' + t);
	}
	if (t>=d){
		console.log(d + ' ' + t);
	}
		
}