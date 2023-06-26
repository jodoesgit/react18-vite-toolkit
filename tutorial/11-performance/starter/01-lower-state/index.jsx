import { useState } from "react";
import { data } from "../../../../src/data";
import Counter from "./Counter";
import List from "./List";

const LowerState = () => {
	const [people, setPeople] = useState(data);

	return (
		<section class="container">
			<Counter />
			<List people={people} />
		</section>
	);
};
export default LowerState;
