//Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time
console.log('\nProblem 2: Numbers not divisable');

	function probTwoFunc(){
	document.getElementById('probTwoResult').value ='';
	var number = document.getElementById('probTwoNumber').value,
		i;

	number = +number;
	for (i = 1; i <= number; i += 1){
		if (!(!(i % 3) && !(i % 7))){
			document.getElementById('probTwoResult').value += i;
			console.log(i);
			if (i < number){
				document.getElementById('probTwoResult').value += ', ';
			}
		}
	}
}