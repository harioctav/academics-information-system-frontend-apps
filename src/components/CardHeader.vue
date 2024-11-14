<script setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
	backRoute: {
		type: [String, Object],
		default: null,
	},
	createRoute: {
		type: [String, Object],
		default: null,
	},
	createLabel: {
		type: String,
		default: "Create",
	},
	onCreateClick: {
		type: Function,
		default: null,
	},
});
</script>

<template>
	<div class="flex items-center justify-between px-5 mt-4">
		<div class="font-semibold text-xl">{{ title }}</div>

		<Button
			v-if="backRoute"
			label="Back"
			icon="pi pi-fw pi-chevron-left"
			size="small"
			severity="danger"
			raised
			as="router-link"
			:to="backRoute"
		/>

		<Button
			v-if="createRoute || onCreateClick"
			:label="createLabel"
			icon="pi pi-fw pi-plus"
			size="small"
			raised
			:as="createRoute ? 'router-link' : undefined"
			:to="createRoute"
			@click="onCreateClick"
		/>
	</div>
</template>
