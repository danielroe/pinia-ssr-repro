import { setActivePinia } from "pinia";
import { renderToString } from "vue/server-renderer";

import { createApp } from "./main.js";

export async function render(url) {
	const { app, router, pinia } = createApp();

	router.push(url);
	setActivePinia(pinia);

	await router.isReady();

	const ctx = {};

	ctx._pinia = pinia.state.value;

	const html = await renderToString(app, ctx);

	return { html };
}
