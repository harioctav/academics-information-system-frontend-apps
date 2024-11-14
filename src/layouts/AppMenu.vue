<script setup>
import { ref } from "vue";
import AppMenuItem from "@/layouts/AppMenuItem.vue";

const model = ref([
	{
		label: "Home",
		items: [{ label: "Dashboard", icon: "pi pi-fw pi-home", to: "/" }],
	},
	{
		label: "Academics",
		icon: "pi pi-fw pi-beriefcase",
		to: "/academics",
		items: [
			{
				label: "Academics",
				icon: "pi pi-fw pi-graduation-cap",
				items: [
					{
						label: "Students",
						icon: "pi pi-fw pi-users",
						to: "/academics/students",
					},
					{
						label: "Majors",
						icon: "pi pi-fw pi-image",
						to: "/academics/majors",
					},
					{
						label: "Subjects",
						icon: "pi pi-fw pi-folder-open",
						to: "/academics/subjects",
					},
				],
			},
		],
	},
	{
		label: "Settings",
		icon: "pi pi-fw pi-beriefcase",
		to: "/settings",
		items: [
			{
				label: "User Managements",
				icon: "pi pi-fw pi-cog",
				items: [
					{
						label: "Users",
						icon: "pi pi-fw pi-user",
						to: "/settings/users",
					},
					{
						label: "Role & Permissions",
						icon: "pi pi-fw pi-shield",
						to: "/settings/roles",
					},
				],
			},
		],
	},
	{
		label: "Locations",
		icon: "pi pi-fw pi-map-marker",
		to: "/locations",
		items: [
			{
				label: "Locations",
				icon: "pi pi-fw pi-map-marker",
				items: [
					{
						label: "Provinces",
						icon: "pi pi-fw pi-globe",
						to: "/locations/provinces",
					},
					{
						label: "Regencies",
						icon: "pi pi-fw pi-building",
						to: "/locations/regencies",
					},
					{
						label: "Districts",
						icon: "pi pi-fw pi-map",
						to: "/locations/districts",
					},
					{
						label: "Villages",
						icon: "pi pi-fw pi-building-columns",
						to: "/locations/villages",
					},
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
