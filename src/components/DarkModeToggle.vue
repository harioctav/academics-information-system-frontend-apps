<script setup>
import { useLayout } from "@/composables/layout";

const { toggleDarkMode, isDarkTheme } = useLayout();
</script>

<template>
	<button type="button" class="layout-topbar-action" @click="toggleDarkMode">
		<i :class="['pi', { 'pi-moon': isDarkTheme, 'pi-sun': !isDarkTheme }]"></i>
	</button>
</template>
