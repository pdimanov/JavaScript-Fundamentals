//Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.
//Use the function from the previous exercise.
console.log('\nProblem 7: First larger than neighbours');

var ar = [5, 23, 12, 6, 2, 65, 26, 16, 62];

function smallerNeighbours(arr){
	var len = arr.length,
		i,
		count = 0;

	for (i = 0; i < len; i += 1){
		if (arr[i] > arr[i + 1]) {
			count = i;
			break;
		}
	}
	if (count === 0){
		return '-1';
	}
	return i;
}
 
console.log(smallerNeighbours(ar));