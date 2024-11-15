import { LanguageSwitcher } from "@/utils/enums/LanguageSwitcher";
import { createI18n } from "vue-i18n";
import en from "@/lang/en";
import id from "@/lang/id";

export default createI18n({
	legacy: false,
	locale: localStorage.getItem("locale") || LanguageSwitcher.En,
	fallbackLocale: LanguageSwitcher.En,
	messages: {
		en,
		id,
	},
});
