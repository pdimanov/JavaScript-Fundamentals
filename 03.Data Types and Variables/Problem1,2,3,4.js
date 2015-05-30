var integer = 1,
	floatInteger = 1.5,
	string = 'word',
	bool = true,
	object = {
		name:"pesho",
		age:20
	}
	var func = function() {
		return;
	};
	array = [integer, floatInteger, string, bool, object, func];

var quote = "'How you doin/'?', Joey said.";

for (var i=0; i<array.length; i += 1){
	console.log('The type of ' + array[i] + ' is: ' + typeof(array[i]));
}

console.log('The type of the quote is: ' + typeof(quote));

var nullVar = null,
	undefVar = undefined;

console.log('The type of null is: ' + typeof(nullVar));
console.log('The type of undefined is: ' + typeof(undefVar));