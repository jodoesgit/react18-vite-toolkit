import { data } from "../../../src/data.js";
import React from "react";

const UseStateArray = () => {
	const [people, setPeople] = React.useState(data);

	const removeItem = (id) => {
		console.log(id);
		const newPeople = people.filter((person) => person.id !== id);
		setPeople(newPeople);
	};
	const clearAll = () => {
		setPeople([]);
		// setPeople(people.filter((person) => person.id !== id)); alternative
	};

	return (
		<div>
			{people.map((person) => {
				const { id, name } = person;

				return (
					<div key="id">
						<h2>{name}</h2>
						<button onClick={() => removeItem(id)}>Remove</button>
					</div>
				);
			})}
			{/* <button style={{ marginTop: "2rem" }} className="btn" onClick={()=> setPeople([])}> alternative method */}
			<button style={{ marginTop: "2rem" }} className="btn" onClick={clearAll}>
				Clear All
			</button>
		</div>
	);
};

export default UseStateArray;
