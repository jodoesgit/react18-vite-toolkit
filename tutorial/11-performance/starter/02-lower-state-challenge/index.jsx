import { useState } from "react";
import Form from "./Form";
import { data } from "../../../../src/data";
import List from "./List";

const LowerStateChallenge = () => {
	const [people, setPeople] = useState(data);

	const addPerson = (name) => {
		const fakeId = Date.now();
		const newPerson = { id: fakeId, name };
		setPeople([...people, newPerson]);
	};
	return (
		<section className="container">
			<Form addPerson={addPerson} />
			<List people={people} />
		</section>
	);
};
export default LowerStateChallenge;
