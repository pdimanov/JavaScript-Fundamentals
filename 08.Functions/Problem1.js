//Write a function that returns the last digit of given integer as an English word.
console.log('Problem 1: English digit');

var a = [512, 1024, 12309, 200, 511, 933, 405, 96, 327, 848],
	i,
	len;

function engDigit(number){
	var digitToWord = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'],
		digits = number%10;

	return digitToWord[digits];
}

for (i = 0, len = a.length; i < len; i += 1){
	console.log(engDigit(a[i]));
}