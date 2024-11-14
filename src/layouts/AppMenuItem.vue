<script setup>
import { useLayout } from "@/composables/layout";
import { onBeforeMount, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { layoutState, setActiveMenuItem, onMenuToggle } = useLayout();

const props = defineProps({
	item: {
		type: Object,
		default: () => ({}),
	},
	index: {
		type: Number,
		default: 0,
	},
	root: {
		type: Boolean,
		default: true,
	},
	parentItemKey: {
		type: String,
		default: null,
	},
});

const isActiveMenu = ref(false);
const isExpanded = ref(false);
const itemKey = ref(null);

function checkActiveRoute(item) {
	if (item.to === "/") {
		return route.path === "/";
	}
	return route.path.startsWith(item.to);
}

function updateActiveMenu() {
	if (props.item.items) {
		const hasActiveChild = props.item.items.some((child) => {
			if (child.items) {
				return child.items.some((subChild) => {
					if (subChild.to === "/") {
						return route.path === "/";
					}
					return route.path.startsWith(subChild.to);
				});
			}
			if (child.to === "/") {
				return route.path === "/";
			}
			return route.path.startsWith(child.to);
		});

		isActiveMenu.value = hasActiveChild;
		isExpanded.value = hasActiveChild;
	} else {
		isActiveMenu.value = checkActiveRoute(props.item);
	}
}

onBeforeMount(() => {
	itemKey.value = props.parentItemKey
		? props.parentItemKey + "-" + props.index
		: String(props.index);

	updateActiveMenu();
});

watch(
	() => route.path,
	() => {
		updateActiveMenu();
	}
);

function itemClick(event, item) {
	if (item.disabled) {
		event.preventDefault();
		return;
	}

	if (
		(item.to || item.url) &&
		(layoutState.staticMenuMobileActive || layoutState.overlayMenuActive)
	) {
		onMenuToggle();
	}

	if (item.command) {
		item.command({ originalEvent: event, item: item });
	}

	if (item.items) {
		isExpanded.value = !isExpanded.value;
	}

	const foundItemKey = item.items
		? isActiveMenu.value
			? props.parentItemKey
			: itemKey
		: itemKey.value;

	setActiveMenuItem(foundItemKey);
}
</script>

<template>
	<li
		:class="{ 'layout-root-menuitem': root, 'active-menuitem': isActiveMenu }"
	>
		<div
			v-if="root && item.visible !== false"
			class="layout-menuitem-root-text"
		>
			{{ item.label }}
		</div>
		<a
			v-if="(!item.to || item.items) && item.visible !== false"
			:href="item.url"
			@click="itemClick($event, item, index)"
			:class="item.class"
			:target="item.target"
			tabindex="0"
		>
			<i :class="item.icon" class="layout-menuitem-icon"></i>
			<span class="layout-menuitem-text">{{ item.label }}</span>
			<i
				class="pi pi-fw pi-angle-down layout-submenu-toggler"
				v-if="item.items"
			></i>
		</a>
		<RouterLink
			v-if="item.to && !item.items && item.visible !== false"
			@click="itemClick($event, item, index)"
			:class="[item.class, { 'active-route': checkActiveRoute(item) }]"
			tabindex="0"
			:to="item.to"
		>
			<i :class="item.icon" class="layout-menuitem-icon"></i>
			<span class="layout-menuitem-text">{{ item.label }}</span>
			<i
				class="pi pi-fw pi-angle-down layout-submenu-toggler"
				v-if="item.items"
			></i>
		</RouterLink>
		<Transition
			v-if="item.items && item.visible !== false"
			name="layout-submenu"
		>
			<ul v-show="root ? true : isExpanded" class="layout-submenu">
				<AppMenuItem
					v-for="(child, i) in item.items"
					:key="child"
					:index="i"
					:item="child"
					:parentItemKey="itemKey"
					:root="false"
				></AppMenuItem>
			</ul>
		</Transition>
	</li>
</template>

<style lang="scss" scoped></style>
