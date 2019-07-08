let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
for(x = 0; x < students.length; x++){
  console.log('Name:' + ' '  + students[x].name +', Cohort:' + ' '  + students[x].cohort);
}

const users = {
	employees: [
        {first_name: 'Miguel', last_name: 'Jones'},
        {first_name: 'Ernie', last_name: 'Bertson'},
        {first_name: 'Nora', last_name: 'Lu'},
        {first_name: 'Sally', last_name: 'Barkyoumb'}
	],
	managers: [
       {first_name: 'Lillian', last_name: 'Chambers'},
       {first_name: 'Gordon', last_name: 'Poe'}
	]
};

for (const group in users) {
	console.log(group.toUpperCase());
	for (const person in users[group]) {
		let counter = 1;
		const firstName = users[group][person].first_name.toUpperCase();
		const lastName = users[group][person].last_name.toUpperCase();
		const nameCount = firstName.length + lastName.length;
		console.log(`${counter} - ${lastName}, ${firstName}  - ${nameCount}`);
		counter++;
	}
}