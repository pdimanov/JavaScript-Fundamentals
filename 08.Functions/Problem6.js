//Write a function that checks if the element at given position in given array of integers is bigger than its two neighbours (when such exist).
console.log('\nProblem 6: Larger than neighbours');

var ar = [5, 23, 12, 6, 2, 65, 26, 16, 62];

function smallerNeighbours(position, arr){
	var len = arr.length;

	if ((arr[position] === arr[0] && arr[position] > arr[position + 1]) || (arr[position] === arr[len - 1] && arr[position] > arr[position - 1])) {
		return 'This element is bigger than it\'s neighbour';
	} else if (arr[position] === arr[0] && arr[position] === arr[len - 1]){
		return 'This element doesn\'t have any neighbours';
	} else if (arr[position] > arr[position + 1] && arr[position] > arr[position - 1]){
		return 'This element is bigger than it\'s two neighbours';
	} else {
		return 'One or two neighbours are bigger than this element';
	}

}

console.log(smallerNeighbours(1, ar));