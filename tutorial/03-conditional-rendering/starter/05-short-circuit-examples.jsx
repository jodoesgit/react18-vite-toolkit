import { useState } from "react";

const ShortCircuitExamples = () => {
	// falsy
	const [text, setText] = useState("");
	// truthy
	const [name, setName] = useState("susan");
	// const [user, setUser] = useState({ name: "john" });
	const [user, setUser] = useState(null);
	const [isEditing, setIsEditing] = useState(true);

	return (
		<div>
			<h2>{text || "Default Value"}</h2>
			{text && (
				<div>
					<h2>Things</h2>
					<h2>{name}</h2>
				</div>
			)}
			{/* {!text && (
				<div>
					<h2>!Things</h2>
					<h2>{name}</h2>
				</div>
			)} */}
			{user && <SomeComponent name={user.name} />}
			<h2 style={{ margin: "1rem 0" }}>Ternary Operator</h2>
			<button className="btn">{isEditing ? "edit" : "add"}</button>
			{user ? (
				<div>
					<h4>Hello there, {user.name}</h4>
				</div>
			) : (
				<div>
					<h2>Please login</h2>
				</div>
			)}
		</div>
	);
};

const SomeComponent = ({ name }) => {
	return (
		<div>
			<h2>Things</h2>
			<h2>{name}</h2>
		</div>
	);
};

export default ShortCircuitExamples;
