import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";
import "@/assets/styles.scss";
import "@/assets/tailwind.css";
import "@/assets/css/main.css";
import { useLayout } from "@/composables/layout";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
	theme: {
		preset: Aura,
		options: {
			darkModeSelector: ".app-dark",
		},
	},
});
app.use(ToastService);
app.use(ConfirmationService);

const { initTheme } = useLayout();

initTheme();
app.mount("#app");
