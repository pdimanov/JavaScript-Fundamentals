//Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.
console.log('\nProblem 8: Number as words');

function numberAsWord(){
	var number = document.getElementById('number').value,
		result;

	if (number > 999 || number < 0 || isNaN(number)){
		document.getElementById('numberWord').value = 'invalid number';
		console.log('invalid number');
	} else {
		number = number*1;
		var hundreds = (number / 100 | 0),
			tens = (((number / 10) | 0) % 10 ),
			digits = number % 10,
			special = 10 + digits;

		switch(digits){
			case 0: digits = 'Zero'; break;
			case 1: digits = 'One'; break;
			case 2: digits = 'Two'; break;
			case 3: digits = 'Three'; break;
			case 4: digits = 'Four'; break;
			case 5: digits = 'Five'; break;
			case 6: digits = 'Six'; break;
			case 7: digits = 'Seven'; break;
			case 8: digits = 'Eight'; break;
			case 9: digits = 'Nine'; break;
		}

		switch(special){
			case 10: special = 'Ten'; break;
			case 11: special = 'Eleven'; break;
			case 12: special = 'Twelve'; break;
			case 13: special = 'Thirteen'; break;
			case 14: special = 'Fourteen'; break;
			case 15: special = 'Fifteen'; break;
			case 16: special = 'Sixteen'; break;
			case 17: special = 'Seventeen'; break;
			case 18: special = 'Eighteen'; break;
			case 19: special = 'Nineteen'; break;
		}

		switch(tens){
			case 2: tens = 'Twenty'; break;
			case 3: tens = 'Thirty'; break;
			case 4: tens = 'Forty'; break;
			case 5: tens = 'Fifty'; break;
			case 6: tens = 'Sixty'; break;
			case 7: tens = 'Seventy'; break;
			case 8: tens = 'Eighty'; break;
			case 9: tens = 'Ninety'; break;
		}

		switch(hundreds){
			case 1: hundreds = 'One hundred'; break;
			case 2: hundreds = 'Two hundred'; break;
			case 3: hundreds = 'Three hundred'; break;
			case 4: hundreds = 'Four hundred'; break;
			case 5: hundreds = 'Five hundred'; break;
			case 6: hundreds = 'Six hundred'; break;
			case 7: hundreds = 'Seven hundred'; break;
			case 8: hundreds = 'Eight hundred'; break;
			case 9: hundreds = 'Nine hundred'; break;
		}

		if(number < 10){
			result = digits;
		} else if (number < 20){
			result = special;
		} else if (number < 100){
			if (number%10 == 0){
				result = tens;
			} else {
				result = tens + '-' + digits;
			}
		} else if (number < 1000){
			if (number%10 == 0 && (((number / 10) | 0) %10) == 0){
				result = hundreds;
			} else if (/*(((number / 10) | 0) %10)*/tens == 1){
				result = hundreds + ' and ' + special;
			} else if (number%10 == 0 && (((number / 10) | 0) %10) > 1){
				result = hundreds + ' and ' + tens;
			} else if ((((number / 10) | 0) %10) == 0 && number%10 != 0){
				result = hundreds + ' and ' + digits;
			} else if (((((number / 10) | 0) %10) > 1) && number%10 != 0){
				result = hundreds + ' and ' + tens + '-' + digits;
			}
		}
		document.getElementById('numberWord').value = result;
		console.log(result);
	}
}