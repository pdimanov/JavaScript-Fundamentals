//Write a script that finds the maximal increasing sequence in an array.
console.log('\nProblem 4: Maximal increasing sequence');

var arr = [3, 2, 3, 4, 2, 2, 4];

function sequence(arr){
	var count = 1,
		seqStart,
		seqEnd,
		temp,
		len,
		best = 0,
		seqStartNum,
		i,
		maxIncSeq = [];

	for(i = 0, len = arr.length; i < len; i += 1){
		if (arr[i] === arr[i+1]-1 && arr[i] !== arr[i-1]+1){
			seqStart = i;
			seqStartNum = arr[i];
			count += 1;
 		} else if (arr[i] !== arr[i+1]-1 && arr[i] === arr[i-1]+1) {
 			seqEnd = i;
 			temp = count;
 			count = 1;
 			if (temp > best){
 				best = temp;
 				temp = 0;
 			}
 		} else {
 			count = 1;
 		}
	} 
	for (i = seqStart ; i <= seqEnd; i += 1){
		maxIncSeq.push(arr[i]);
	}
	return maxIncSeq;
}
console.log(sequence(arr));