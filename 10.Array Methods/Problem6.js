//Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
//Use Array#reduce
//Use only array methods and no regular loops (for, while)
console.log('\nProblem 6: Group people');

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

var groupPeople = function(person) {
	person = person.sort(
		function(a, b) {
			return a.fName.toLowerCase().localeCompare(b.fName.toLowerCase());
		}
	);

	function groupedBy(group, person) {
		var fNameLetter = person.fName[0].toLowerCase();
		if (!group.hasOwnProperty(fNameLetter)) {
			group[fNameLetter] = [];
		}
		group[fNameLetter].push(person);
		return group;
	}

	function sortFname(fPerson, sPerson) {
		return fPerson.fName[0] - sPerson.fName[0];
	}
	return person.reduce(groupedBy, {});
};

var result = groupPeople(persons);
console.log(result);