import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div>
			<button className="btn" onClick={() => setToggle(!toggle)}>
				Toggle
			</button>
			{toggle && <RandomComponent />}
		</div>
	);
};

const RandomComponent = () => {
	useEffect(() => {
		console.log("hmm, interesting");
	});
	return <h1>Hello World</h1>;
};

export default CleanupFunction;
