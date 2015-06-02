//Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.
console.log('\nProblem 7: Binary search');

var arr = [5, 12, 7, 123, 6, 1, 34, 2, 93],
	target,
	len = arr.length;
	min = arr[0],
	max = arr[len - 1];

function sortingArr(a, b){
	return a - b;
}

arr.sort(sortingArr);

function binarySearch(arr, target, min, max){
	var mid = arr[Math.floor((min + max)/2)];
	
	if (target > max || target < min){
		return 'invalid number';
	}

	if (target > mid){
		min = mid + 1;
		binarySearch (arr, target, min, max);
	} else if (target < mid){
		max = mid - 1;
		binarySearch (arr, target, min, max);
	} else {
		return mid;
	}
}

console.log(binarySearch(arr, 6, 0, arr.length -1 ));