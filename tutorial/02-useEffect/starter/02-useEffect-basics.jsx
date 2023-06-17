import { useState } from "react";

const UseEffectBasics = () => {
	const [value, setValue] = useState(0);
	const sayHello = () => {
		// Infinite Loop: setValue(value+1);
		console.log("hello there");
	};

	sayHello();

	useEffect(() => {
		// const someFunc = async () => {
		// 	await fetch;
		// };
		console.log("useEffect");
	}, []);

	return (
		<div>
			<h1>value : {value}</h1>
			<button className="btn" onClick={() => setValue(value + 1)}>
				click me
			</button>
		</div>
	);
};
export default UseEffectBasics;
