<script setup>
import { useBreadcrumb } from "@/composables/useBreadcrumb";
import CardHeader from "@/components/CardHeader.vue";

const { renderBreadcrumb } = useBreadcrumb("Create Province", {
	label: "Provinces",
	path: "/locations/provinces",
});
</script>

<template>
	<Card>
		<template #header>
			<CardHeader
				title="Create New Province"
				:back-route="{ name: 'provinces' }"
			/>
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
