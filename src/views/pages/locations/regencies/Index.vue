<script setup>
import { ref } from "vue";
import { useBreadcrumb } from "@/composables/useBreadcrumb";
import CardHeader from "@/components/CardHeader.vue";

const { renderBreadcrumb } = useBreadcrumb("Regencies");
const visible = ref(false);
</script>

<template>
	<Card>
		<template #header>
			<CardHeader
				title="Regencies"
				create-label="Create Regency"
				:on-create-click="() => (visible = true)"
			/>
			<Dialog
				v-model:visible="visible"
				maximizable
				modal
				header="Create New Regency"
				:style="{ width: '50rem' }"
				:breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
			>
				<p class="m-0">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</Dialog>
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
