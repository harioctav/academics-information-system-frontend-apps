import { computed, reactive, readonly } from "vue";

const getInitialConfig = () => {
	const stored = localStorage.getItem("layoutConfig");
	if (stored) {
		return JSON.parse(stored);
	}
	return {
		preset: "Aura",
		primary: "emerlad",
		surface: null,
		darkTheme: false,
		menuMode: "static",
	};
};

const layoutConfig = reactive(getInitialConfig());

const layoutState = reactive({
	staticMenuDesktopInactive: false,
	overlayMenuActive: false,
	profileSidebarVisible: false,
	configSidebarVisible: false,
	staticMenuMobileActive: false,
	menuHoverActive: false,
	activeMenuItem: null,
});

const saveConfig = () => {
	localStorage.setItem("layoutConfig", JSON.stringify(layoutConfig));
};

const isSidebarActive = computed(
	() => layoutState.overlayMenuActive || layoutState.staticMenuMobileActive
);

const isDarkTheme = computed(() => layoutConfig.darkTheme);

export function useLayout() {
	const setActiveMenuItem = (item) => {
		layoutState.activeMenuItem = item.value || item;
	};

	const toggleDarkMode = () => {
		if (!document.startViewTransition) {
			executeDarkModeToggle();
			return;
		}
		document.startViewTransition(() => executeDarkModeToggle());
	};

	const executeDarkModeToggle = () => {
		layoutConfig.darkTheme = !layoutConfig.darkTheme;
		document.documentElement.classList.toggle("app-dark");
		saveConfig();
	};

	const onMenuToggle = () => {
		if (layoutConfig.menuMode === "overlay") {
			layoutState.overlayMenuActive = !layoutState.overlayMenuActive;
		}

		if (window.innerWidth > 991) {
			layoutState.staticMenuDesktopInactive =
				!layoutState.staticMenuDesktopInactive;
		} else {
			layoutState.staticMenuMobileActive = !layoutState.staticMenuMobileActive;
		}
	};

	const initTheme = () => {
		if (layoutConfig.darkTheme) {
			document.documentElement.classList.add("app-dark");
		}
	};

	return {
		layoutConfig: readonly(layoutConfig),
		layoutState: readonly(layoutState),
		onMenuToggle,
		isSidebarActive,
		isDarkTheme,
		setActiveMenuItem,
		toggleDarkMode,
		initTheme,
	};
}
