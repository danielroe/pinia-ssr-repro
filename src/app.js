import { defineComponent, h, Suspense } from "vue";
import { RouterLink, RouterView } from "vue-router";

export default defineComponent({
	render: () =>
		h("div", [
			h(RouterLink, { to: "/" }, () => "Home"),
			h(RouterView, null, {
				default: ({ Component }) => h(Suspense, {}, h(Component)),
			}),
		]),
});
