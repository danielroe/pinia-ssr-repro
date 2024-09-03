import { defineComponent, h } from "vue";
import { useTestStore } from "../stores/example.js";

export default defineComponent({
	async setup() {
		const store = useTestStore();
		await store.fetchIconsData();

		return () => h("h1", "Home");
	},
});
