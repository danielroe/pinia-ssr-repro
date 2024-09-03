import { defineStore } from "pinia";

export const useTestStore = defineStore("test", {
	state: () => ({
		icons: [],
	}),
	getters: {
		getIcons: (state) => state.icons,
	},
	actions: {
		async fetchIconsData() {
			this.icons = await fetch("https://jsonplaceholder.typicode.com/todos",).then((r) => r.json());
		},
	},
});
