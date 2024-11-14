<script setup>
import { useBreadcrumb } from "@/composables/useBreadcrumb";

const { renderBreadcrumb } = useBreadcrumb("Create Province", {
	label: "Provinces",
	path: "/locations/provinces",
});
</script>

<template>
	<Card>
		<template #title>
			<div class="flex items-center justify-between">
				<span>Create New Province</span>
				<Button
					label="Back"
					icon="pi pi-fw pi-chevron-left"
					as="router-link"
					size="small"
					severity="danger"
					raised
					:to="{ name: 'provinces' }"
				/>
			</div>
		</template>
		<template #subtitle>
			<component :is="renderBreadcrumb" />
		</template>
		<template #content>
			<p class="mb-4">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
				consequuntur error repudiandae numquam deserunt quisquam repellat libero
				asperiores earum nam nobis, culpa ratione quam perferendis esse,
				cupiditate neque quas!
			</p>
		</template>
	</Card>
</template>
