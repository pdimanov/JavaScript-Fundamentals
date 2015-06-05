//Write a function to count the number of div elements on the web page
console.log('\nProblem 4: Number of elements');

function numberOfDivs(tag){
	var count = document.getElementsByTagName(tag).length;
	document.getElementById('result').value = count;
	console.log(count);
}