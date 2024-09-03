import { createSSRApp } from "vue";
import { createPinia } from "pinia";
import App from "./app.js";
import { createRouter } from "./router.js";

export function createApp() {
	const app = createSSRApp(App);

	const pinia = createPinia();
	const router = createRouter();

	app.use(router);
	app.use(pinia);

	return { app, router, pinia };
}
