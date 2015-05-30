//Write a script that asks for a digit (0-9), and depending on the input, shows the digit as a word (in English).
//Print “not a digit” in case of invalid input.
//Use a switch statement.
console.log('\nProblem 5: Digit as word');

function Problem5() {
	var number = document.getElementById('input').value,
		result5;
	number = number * 1;

	switch(number){
		case 0:
			result = 'Zero'; break;
		case 1:
			result = 'One'; break;
		case 2:
			result = 'Two'; break;
		case 3:
			result = 'Three'; break;
		case 4:
			result = 'Four'; break;
		case 5:
			result = 'Five'; break;
		case 6:
			result = 'Six'; break;
		case 7:
			result = 'Seven'; break;
		case 8:
			result = 'Eight'; break;
		case 9:
			result = 'Nine'; break;
		default: result = 'not a digit';
	}

	document.getElementById('result5').value = result;
	console.log(result);
}