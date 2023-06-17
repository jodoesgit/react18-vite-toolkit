// Value logged is asynchronous to value shown (+1)

import { useState } from "react";

const UseStateGotcha = () => {
	const [value, setValue] = useState(0);

	const handleClick = () => {
		// setValue(value + 1);
		setValue((currentState) => {
			console.log("Current: " + currentState);
			const newState = currentState + 1;
			console.log("New: " + newState);

			return newState;
		});
	};

	return (
		<div>
			<h1>{value}</h1>
			<button type="button" className="btn" onClick={handleClick}>
				++
			</button>
		</div>
	);
};

export default UseStateGotcha;
