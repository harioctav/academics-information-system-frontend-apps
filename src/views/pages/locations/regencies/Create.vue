<script setup>
import { useBreadcrumb } from "@/composables/useBreadcrumb";

const { renderBreadcrumb } = useBreadcrumb("Create Regency", {
	label: "Regencies",
	path: "/locations/regencies",
});
</script>

<template>
	<Card>
		<template #title>Create new Regencies</template>
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
