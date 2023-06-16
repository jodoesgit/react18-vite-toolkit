// import React from "react";
import { useState } from "react";

const UseStateBasics = () => {
	// console.log(useState(1));
	// const value = useState("hello")[0];
	// // console.log(value);
	// const func = useState(value)[1];
	// console.log(func);

	const [count, setCount] = useState(0);
	// const [name, setName] = React.useState();

	const addCount = () => {
		setCount(count + 1);
		// setCount("pants");
	};

	return (
		<div>
			<h4>Count: {count}</h4>
			<button type="button" className="btn" onClick={addCount}>
				Add to Count
			</button>
		</div>
	);
};

export default UseStateBasics;
