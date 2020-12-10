import React from "react";

export default function Root(props) {
	return (
		<div className="app">
			<h1>{props.name}</h1>
			<h2>Hello World</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ipsum iaculis, accumsan eros nec, gravida tortor. Quisque porta, magna vitae rutrum cursus, enim felis convallis lectus, ac interdum dolor turpis congue ligula. Aenean magna diam, congue a posuere vitae, auctor in magna. Vivamus eu nulla vel mauris mollis porta in nec orci. Proin in justo ipsum. Etiam varius, augue nec pharetra ultricies, tortor tellus venenatis urna, id aliquet diam erat vitae neque. Praesent eget arcu mollis, sollicitudin purus ac, placerat augue. Ut at venenatis massa. Ut rutrum tempus urna vel commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi suscipit a libero in ornare. Sed tempor feugiat tincidunt.</p>
		</div>
	);
}
