<script setup>
import { ref } from "vue";
import { LanguageSwitcher as LangSwitch } from "@/utils/enums/LanguageSwitcher";
import { useI18n } from "vue-i18n";

const { locale, t } = useI18n();
const isOpen = ref(false);

const languages = [
	{ code: LangSwitch.En, name: LangSwitch.English, flag: "🇺🇸" },
	{ code: LangSwitch.Id, name: LangSwitch.Indonesia, flag: "🇮🇩" },
];

const switchLanguage = (lang) => {
	locale.value = lang;
	localStorage.setItem("locale", lang);
	isOpen.value = false;
};

const toggleDropdown = () => {
	isOpen.value = !isOpen.value;
};
</script>

<template>
	<div class="relative inline-block">
		<!-- Trigger Button -->
		<button type="button" class="layout-topbar-action" @click="toggleDropdown">
			<i class="pi pi-language"></i>
		</button>

		<!-- Dropdown Menu -->
		<div
			v-show="isOpen"
			class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5"
		>
			<!-- Header -->
			<div class="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
				<h3
					class="text-sm font-medium text-gray-900 dark:text-gray-100 text-center"
				>
					{{ t("page.lang") }}
				</h3>
			</div>

			<!-- Language Options -->
			<div class="py-1">
				<button
					v-for="lang in languages"
					:key="lang.code"
					@click="switchLanguage(lang.code)"
					class="w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between"
				>
					<div class="flex items-center">
						<span class="mr-2">{{ lang.flag }}</span>
						<span>{{ lang.name }}</span>
					</div>
					<i v-if="locale === lang.code" class="pi pi-check ml-2"></i>
				</button>
			</div>
		</div>
	</div>
</template>
