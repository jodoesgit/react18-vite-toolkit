import { useState } from "react";

const UseStateObject = () => {
	// const [name, setName] = useState("peter");
	// const [age, setAge] = useState(24);
	// const [hobby, setHobby] = useState("reading books");

	const [person, setPerson] = useState({
		name: "peter",
		age: 24,
		hobby: "Reading books",
	});

	const displayJohn = () => {
		// setName("John");
		// setAge(28);
		// setHobby("Screaming at Computer");

		// setPerson({
		// 	name: "John",
		// 	age: 28,
		// 	hobby: "Screaming at computers",
		// });

		setPerson({ name: "John", age: 28, hobby: "Screaming at the computer" });

		// setPerson('shakeAndBake'); Gotcha - cannot just pass a string - because we have an object
		// Equally cannot pass in setPerson({name:'Susie'}) - will only have name value
	};

	const displaySusie = () => {
		setPerson({ ...person, name: "Susie" });
	};

	return (
		<>
			<h3>{person.name}</h3>
			<h3>{person.age}</h3>
			<h4>Hobby: {person.hobby}</h4>
			<button className="btn" onClick={displayJohn}>
				Show John
			</button>
			<button
				className="btn"
				onClick={displaySusie}
				style={{ marginLeft: "2rem" }}
			>
				Show Susan
			</button>
		</>
	);
};

export default UseStateObject;
