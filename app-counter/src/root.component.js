import React, { useState } from "react";

export default function Root(props) {
	const [counter, setCounter] = useState(0);

	return (
		<div className="app">
			<h1>{props.name}</h1>
			<h2>{counter}</h2>
			<button onClick={() => setCounter(counter - 1)}>Decrement</button>
			<button onClick={() => setCounter(counter + 1)}>Increment</button>
		</div>
	);
}
