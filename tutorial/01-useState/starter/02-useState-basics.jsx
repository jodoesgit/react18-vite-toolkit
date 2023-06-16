/*
useState hook -> returns an array with two elements - current state value, and a function we can use to update the state
accepts default values as an argument, and state triggers re-render - React app -> initial render firs time component tree rendered to DOM
Happens when app first loads, when root component is first rendered.  Known as "mounting" components.  Re-render happens when components state or props
change and the component needs to be updated in the DOM to reflect these changes.  React uses a virtual DOM to optimize the process of updating the actual DOM
So the only necessary changes are made. (Rehydrate)

There are a few ways you can trigger re-render.  By changing the components state/props - when the components state or props change - react will re-render the components reflected changes
Can also rerender when the parent element rerenders even if the components state hasn't changed

General rules of hooks:
- Start with use - both -react and custom hooks
- Component must be uppercase
- Invoke inside of function/component body
- Don't call hooks conditionally
- Set functions don't update state immediately
*/

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
