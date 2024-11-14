<script setup>
import { ref } from "vue";

import AppMenuItem from "@/layouts/AppMenuItem.vue";

const model = ref([
	{
		label: "Home",
		items: [{ label: "Dashboard", icon: "pi pi-fw pi-home", to: "/" }],
	},

	{
		label: "Pages",
		icon: "pi pi-fw pi-briefcase",
		to: "/pages",
		items: [
			{
				label: "Auth",
				icon: "pi pi-fw pi-user",
				items: [
					{
						label: "Login",
						icon: "pi pi-fw pi-sign-in",
						to: "/auth/login",
					},
					{
						label: "Error",
						icon: "pi pi-fw pi-times-circle",
						to: "/auth/error",
					},
					// {
					// 	label: "Access Denied",
					// 	icon: "pi pi-fw pi-lock",
					// 	to: "/auth/access",
					// },
				],
			},
		],
	},
]);
</script>

<template>
	<ul class="layout-menu">
		<template v-for="(item, i) in model" :key="item">
			<AppMenuItem v-if="!item.separator" :item="item" :index="i"></AppMenuItem>
			<li v-if="item.separator" class="menu-separator"></li>
		</template>
	</ul>
</template>

<style lang="scss" scoped></style>
