<script setup>
import { useLayout } from "@/composables/layout";
import DarkModeToggle from "@/components/DarkModeToggle.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";

const { toggleDarkMode, isDarkTheme } = useLayout();
</script>

<template>
	<div class="fixed flex gap-4 top-8 right-8">
		<DarkModeToggle />
		<LanguageSwitcher />
	</div>
</template>
