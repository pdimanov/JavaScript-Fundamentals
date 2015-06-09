//Write a function that finds the youngest male person in a given array of people and prints his full name
//Use only array methods and no regular loops (for, while)
//Use Array#find
console.log('\nProblem 5: Youngest person');

function Person(fName, lName, age, gender){
	var person = {
		fName: fName,
		lName: lName,
		age: age,
		gender: gender === true ? 'female' : 'male',
		toString: function(){
			return this.fName + ' ' + this.lName + ', ' + this.age + ', ' + this.gender;
		}
	}
	return person;
}

var persons = 
[new Person('Petar', 'Ivanov', 25, false),
new Person('Georgi', 'Ivanov', 22, false),
new Person('Ivan', 'Ivanov', 25, false),
new Person('Petran', 'Petrov', 35, false),
new Person('Gosho', 'Georgiev', 15, false),
new Person('Petranka', 'Ivanova', 23, true),
new Person('Ivanka', 'Ivanova', 26, true),
new Person('Ivelina', 'Georgieva', 27, true),
new Person('Silviq', 'Petrova', 13, true),
new Person('Violeta', 'Petkova', 21, true)];

var males = persons.filter(function(person, index){
	if (person.gender === 'male'){
		return person;
	}
});

if(!Array.prototype.find){
	Array.prototype.find = function(callback){
		var i,
			len;

		for (i = 0, len = this.length; i < len; i += 1){
			if(callback(this[i], i, this)){
				return this[i];
			} else {
				return undefined;
			}
		}
	};
}

function sortAge(a, b){
	return a.age - b.age;
}
males = males.sort(sortAge);

var result = males.find(function(person, index){
	return person;
})

console.log(result.toString());