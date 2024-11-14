<script setup>
import { useBreadcrumb } from "@/composables/useBreadcrumb";

const { renderBreadcrumb } = useBreadcrumb("Provinces");
</script>

<template>
	<Card>
		<template #title>
			<div class="flex items-center justify-between">
				<span>Provinces</span>
				<Button
					label="Create Province"
					icon="pi pi-fw pi-plus"
					as="router-link"
					size="small"
					raised
					:to="{ name: 'provinces.create' }"
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
