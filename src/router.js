import { createMemoryHistory, createRouter as _createRouter } from "vue-router";

export function createRouter() {
	return _createRouter({
		history: createMemoryHistory(),
		routes: [
			{
				path: "/",
				component: () => import("./pages/home.js"),
			},
		],
	});
}
