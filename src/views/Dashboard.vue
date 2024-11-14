<script setup>
import { ref } from "vue";
import { useBreadcrumb } from "@/composables/useBreadcrumb";

const { renderBreadcrumb } = useBreadcrumb("Dashboard");

const selectedCountry = ref();
const countries = ref([
	{ name: "Australia", code: "AU" },
	{ name: "Brazil", code: "BR" },
	{ name: "China", code: "CN" },
	{ name: "Egypt", code: "EG" },
	{ name: "France", code: "FR" },
	{ name: "Germany", code: "DE" },
	{ name: "India", code: "IN" },
	{ name: "Japan", code: "JP" },
	{ name: "Spain", code: "ES" },
	{ name: "United States", code: "US" },
]);
</script>
<template>
	<Card>
		<template #title>Dashboard</template>
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

			<Select
				v-model="selectedCountry"
				:options="countries"
				filter
				showClear
				optionLabel="name"
				placeholder="Select a Country"
				class="w-full md:w-60"
			>
				<template #value="slotProps">
					<div v-if="slotProps.value" class="flex items-center">
						<img
							:alt="slotProps.value.label"
							src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
							:class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`"
							style="width: 18px"
						/>
						<div>{{ slotProps.value.name }}</div>
					</div>
					<span v-else>
						{{ slotProps.placeholder }}
					</span>
				</template>
				<template #option="slotProps">
					<div class="flex items-center">
						<img
							:alt="slotProps.option.label"
							src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
							:class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`"
							style="width: 18px"
						/>
						<div>{{ slotProps.option.name }}</div>
					</div>
				</template>
			</Select>
		</template>
	</Card>
</template>

<style scoped></style>
