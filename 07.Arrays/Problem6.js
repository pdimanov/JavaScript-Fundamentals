//Write a script that finds the most frequent number in an array.
console.log('\nProblem 6: Most frequent number');

var arr = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];

arr.sort();
function sequence(arr){
	var count = 1,
		len,
		best = 1,
		bestArr,
		i,
		maxSeq = [];

	for(i = 0, len = arr.length; i < len; i += 1){
		if (arr[i] === arr[i+1]){
			count += 1;
			if (count > best) {
				best = count;
				bestArr = arr[i];
			}
		} else {
			count = 1;
		}
	}
	return bestArr + (' (' + best + ' times)');
}
console.log(sequence(arr));
