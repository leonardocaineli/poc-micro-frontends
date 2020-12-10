import React, { useState } from "react";
import Parcel from "single-spa-react/parcel";

export default function Root(props) {
	const [task, setTask] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatchEvent(new CustomEvent("@kestraa/app-add-task", {
			detail: task
		}));
		setTask("");
	};

	return (
		<div className="app">
			<h1>{props.name}</h1>
			<form onSubmit={handleSubmit}>
				<input
					onChange={(event) => setTask(event.target.value)}
					value={task}
					placeholder="Add task..."
				/>
				<button>Add</button>
			</form>
			<Parcel config={() => System.import("@kestraa/app-show-tasks")} />
		</div>
	);
}
