import { registerApplication, start } from "single-spa";

registerApplication({
	name: "@kestraa/app-header",
	app: () => System.import("@kestraa/app-header"),
	activeWhen: ["/"],
});

registerApplication({
	name: "@kestraa/app-footer",
	app: () => System.import("@kestraa/app-footer"),
	activeWhen: ["/"],
});

registerApplication({
	name: "@kestraa/app-home",
	app: () => System.import("@kestraa/app-home"),
	activeWhen: (location) => location.pathname === "/",
});

registerApplication({
	name: "@kestraa/app-counter",
	app: () => System.import("@kestraa/app-counter"),
	activeWhen: (location) => location.pathname === "/counter",
});

registerApplication({
	name: "@kestraa/app-add-task",
	app: () => System.import("@kestraa/app-add-task"),
	activeWhen: (location) => location.pathname === "/tasks",
});

start({
	urlRerouteOnly: true,
});
