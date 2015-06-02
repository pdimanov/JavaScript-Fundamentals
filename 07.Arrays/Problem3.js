//Write a script that finds the maximal sequence of equal elements in an array.
console.log('\nProblem 3: Maximal sequence');

var arr = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1];

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
	for (i = 0, len = best; i < len; i += 1){
		maxSeq[i] = bestArr;
	}
	return maxSeq;
}
console.log(sequence(arr));