//Write a script that finds the max and min number from a sequence of numbers.
console.log('\nProblem 3: Min/Max of sequence');

var numbers = [],
	numbersInput = document.getElementById('probThreeNumber'),
	i;

function probThreeFunc(){
	numbers.push(numbersInput.value);
	numbersInput.value ='';
	document.getElementById('probThreeResult').value = numbers.join(', ');
}

function probThreeSeq(){
	var min,
		max;
	max = min = numbers[0];

	document.getElementById('probThreeSeqRes').value = 'Max: ' + Math.max.apply(null, numbers) + ' and Min: ' + Math.min.apply(null, numbers);
	console.log('Max: ' + Math.max.apply(null, numbers) + ' and Min: ' + Math.min.apply(null, numbers));
}