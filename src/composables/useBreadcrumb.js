import { ref, h } from "vue";
import Breadcrumb from "primevue/breadcrumb";
import { RouterLink } from "vue-router";

export function useBreadcrumb(currentPage, parentRoute = null) {
	const home = ref({
		icon: "pi pi-home",
		route: "/",
		label: "Dashboard",
	});

	const items = ref([]);

	// Only add items if we're not on the dashboard page
	if (currentPage !== "Dashboard") {
		if (parentRoute) {
			items.value.push({
				label: parentRoute.label,
				route: parentRoute.path,
			});
		}

		items.value.push({
			label: currentPage,
		});
	}

	const renderBreadcrumb = () => {
		return h(
			Breadcrumb,
			{
				home: home.value,
				model: items.value,
				class: "surface-ground !p-0",
			},
			{
				item: ({ item, props }) => {
					if (item.route) {
						return h(
							RouterLink,
							{
								to: item.route,
								class: "text-primary font-semibold",
							},
							() => [
								item.icon &&
									h("span", { class: [item.icon, "text-primary mr-2"] }),
								h("span", {}, item.label),
							]
						);
					}
					return h(
						"span",
						{ class: "text-surface-700 dark:text-surface-0" },
						item.label
					);
				},
			}
		);
	};

	return {
		home,
		items,
		renderBreadcrumb,
	};
}
