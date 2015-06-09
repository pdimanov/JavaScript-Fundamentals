//Write a function that calculates the average age of all females, extracted from an array of persons
//Use Array#filter
//Use only array methods and no regular loops (for, while)
console.log('\nProblem 4: Average age of females');

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

var result = persons.filter(function(person, index){
	if (person.gender === 'female'){
		return person;
	}
});

var averageArr = result.reduce(function(sum, person){
	return sum + person.age;
}, 0);

console.log(averageArr/result.length);