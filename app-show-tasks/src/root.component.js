import React, { useState, useEffect } from "react";

export default function Root(props) {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		addEventListener("@kestraa/app-add-task", (event) => {
			setTasks((tasks) => [...tasks, event.detail]);
		});
	}, []);

	return (
		<div className="app">
			<h1>@kestraa/app-show-tasks ({props.name})</h1>
			{tasks && tasks.length > 0 ? (
				<ul className="tasks">
					{tasks.map((task) => (
						<li key={task}>{task}</li>
					))}
				</ul>
			) : (
				<p className="noTasks">Ooops! No tasks found.</p>
			)}
		</div>
	);
}
