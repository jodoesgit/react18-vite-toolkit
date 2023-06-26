import React from "react";
import { useState, useReducer } from "react";
import { data } from "../../../src/data";

const defaultState = {
	people: data,
};

const reducer = () => {};

const ReducerBasics = () => {
	const [state, dispatch] = useReducer(reducer, defaultState);

	const removeItem = (id) => {
		// let newPeople = people.filter((person) => person.id !== id);
		// setPeople(newPeople);
	};

	const clearList = () => {
		// setPeople([]);
	};

	const resetList = () => {
		// setPeople(data);
	};

	console.log(state);

	return (
		<div class="container">
			{state.people.map((person) => {
				const { id, name } = person;
				return (
					<div key={id} className="item">
						<h4>{name}</h4>
						<button onClick={() => removeItem(id)}>remove</button>
					</div>
				);
			})}
			{state.people.length < 1 ? (
				<button
					className="btn"
					style={{ marginTop: "2rem" }}
					onClick={resetList}
				>
					reset items
				</button>
			) : (
				<button
					className="btn"
					style={{ marginTop: "2rem" }}
					onClick={clearList}
				>
					clear items
				</button>
			)}
		</div>
	);
};

export default ReducerBasics;
