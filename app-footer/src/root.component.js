import React from "react";

export default function Root(props) {
	return (
		<footer className="app">
			<h1>{props.name}</h1>
			<p>PoCzed by <a href="https://kestraa.com/">Kestraa</a> | Powered by <a href="https://single-spa.js.org/">single-spa</a></p>
		</footer>
	);
}
