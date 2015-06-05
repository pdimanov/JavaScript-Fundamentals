//Write a function that counts how many times given number appears in given array.
//Write a test function to check if the function is working correctly.
console.log('\nProblem 5: Appearance count');

var numbers = [7, 6, 3, 36, 15, 156, 32, 3, 7, 15, 7];

function appearCount(target, arr){
	var i,
		len = arr.length;
		count = 0;

	for (i = 0; i < len; i += 1){
		if (target === arr[i]){
			count += 1;
		}
	}
	if (count === 0){
		return 'no such number';
	}
	return 'The number of appearances of ' + target + ' is: ' + count;
}

console.log(appearCount(3, numbers));
console.log('Test function:');
function test(){
	var test1 = appearCount(7, numbers),
		test2 = appearCount(15, numbers),
		test3 = appearCount(6, numbers),
		test4 = appearCount(156, numbers),
		test5 = appearCount(32, numbers);
	return test1 +'\n'+ test2 +'\n'+ test3 +'\n'+ test4 +'\n'+ test5;
}
console.log(test());