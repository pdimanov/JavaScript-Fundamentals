//Write a script that compares two char arrays lexicographically (letter by letter).
console.log('\nProblem 2: Lexicographically comparison');

var arr1 = ['p', 'e', 's', 'h', 'o'],
	arr2 = ['p', 'e', 's', 'h', 'a', 'n', 'k', 'a'],

	arr3 = ['k', 'a', 'r', 't', 'o', 'f'],
	arr4 = ['k', 'a', 'r', 't', 'o', 'n'],

	arr5 = ['p', 'r', 'o', 'v', 'e', 'r', 'q', 's', 'h', 'm', 'i', 'd', 'o', 'm', 'a', 's', 'h', 'n', 'o', 't', 'o'],
	arr6 = ['p', 'r', 'o', 'v', 'e', 'r', 'q', 's', 'h', 'm', 'i', 'd', 'o', 'm', 'a', 's', 'h', 'n', 'o', 't', 'o'];

function arrCheck(array1, array2){
	var i,
		len;

	if (array1.length != array2.length){
		return('There\'s no match');
	} else {
		for (i = 0, len = array1.length; i < len; i += 1){
			if (array1[i] !== array2[i]){
				return('There\'s no match');break;
			} 
		}
		return('There\'s a match');
	}
}
console.log(arrCheck(arr1, arr2));
console.log(arrCheck(arr3, arr4));
console.log(arrCheck(arr5, arr6));