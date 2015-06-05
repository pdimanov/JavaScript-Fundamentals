//Write a function that reverses the digits of given decimal number.
console.log('\nProblem 2: Reverse number');

var a = [256, 12345],
	i,
	len;

function reverseNum(number){
	var reverse = [],
		digit,
		leng,
		j;

	while (number > 0){
		digit = number%10;
		reverse.push(digit);
		number = number/10 | 0;
	}
	return reverse.join('');
}

for (i = 0, len = a.length; i < len; i += 1){
	console.log(reverseNum(a[i]));
}