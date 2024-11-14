<script setup>
import { ref } from "vue";

const breadcrumbHome = ref({ icon: "pi pi-home", to: "/", label: "Dashboard" });
const breadcrumbItems = ref([
	{ label: "Create Regencies", to: "/locations/regencies/create" },
]);
</script>

<template>
	<Card>
		<template #title>Create new Regencies</template>
		<template #subtitle>
			<div>
				<Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" />
			</div>
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
