const bob = {
	first: "bob",
	last: "sanders",
	city: "chicago",
	siblings: {
		sister: "jane",
	},
};

const { first, last, city } = bob; // c.log: bob, sanders, chicago
// Any properties not in the obj return undefined
// Can give an alias as last:shakeAndBake - returns last

// For properties that are objects themselves - you need to define them as siblings:{sister} and can still give alias siblings{sister:favSibling}

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister); // c.log bob sanders jane

// Way to access values of variables in an easier way than dot notation (where as nested)

// Can destructure when declaring
function printPerson(person) {
	// console.log(person.first); // bob
	const { first, last } = person; // c.log bob sanders
}

// Equally can destructure in params
function printPeople({ first, last, city, siblings: { sister } }) {
	console.log(sister); // Returns Jane
}

printPerson(bob); // When passing in params
