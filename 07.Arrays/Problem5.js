//Sorting an array means to arrange its elements in increasing order.
//Write a script to sort an array.
//Use the selection sort algorithm: Find the smallest element, move it at the first position,
//find the smallest from the rest, move it at the second position, etc.
//Hint: Use a second array
console.log('\nProblem 5: Selection sort');

var arr1 = [7, 4, 12, 2, 75, 32, 25],
	arr2,
	min = arr1[0],
	i,
	j,
	temp,
	len;

function sort(arr){
	for (i = 0, len = arr1.length; i < len; i += 1){
		for (j = i + 1; j < len; j += 1){
			if (arr[i] > arr[j]) {
					temp = arr[j];
					arr[j] = arr[i];
					arr[i] = temp;
				}
		}
	}
}
sort(arr1);
console.log(arr1);