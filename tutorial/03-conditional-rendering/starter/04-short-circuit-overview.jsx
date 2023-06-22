import { useState } from "react";

const ShortCircuitOverview = () => {
	// falsy
	const [text, setText] = useState("");

	const codeExample = text || "hello world";

	//truthy
	const [name, setName] = useState("Susan");
	return (
		<div>
			<h4>Falsy OR: {text || "hello world"}</h4>
			<h4>Falsy AND: {text && "hello world"}</h4>
			<h4>Truthy OR: {name || "hello world"}</h4>
			<h4>Truthy AND: {name && "hello world"}</h4>
			{codeExample}
		</div>
	);
};
export default ShortCircuitOverview;
