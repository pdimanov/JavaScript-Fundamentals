//Write a function that finds all the occurrences of word in a text.
//The search can be case sensitive or case insensitive.
//Use function overloading.
console.log('\nProblem 3: Occurrences of word');

var str = 'Testing out my code for Which which I have no idea what I am doing';

function countSearch(sentence, word, caseInsensitive){
	var	index = 0,
		counter = 0;

	if (caseInsensitive){
		sentence = sentence.toLowerCase();
		word = word.toLowerCase();
	} 

	while (index > -1){
		index = sentence.indexOf(word, index);

		if (index > -1){
			index += 1;
			counter += 1;
		}
	}
	return counter;
}
console.log(countSearch(str, 'Which', true));