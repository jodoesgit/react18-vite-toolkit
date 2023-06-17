// Value logged is asynchronous to value shown (+1)

import { useState } from "react";

const UseStateGotcha = () => {
	const [value, setValue] = useState(0);

	const handleClick = () => {
		setTimeout(() => {
			console.log("pressed");
			setValue((currentState) => {
				return currentState + 1;
			});
		}, 3000);
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
