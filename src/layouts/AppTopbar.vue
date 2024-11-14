<script setup>
import { useLayout } from "@/composables/layout";

const { onMenuToggle, toggleDarkMode, isDarkTheme } = useLayout();
</script>

<template>
	<div class="layout-topbar">
		<div class="layout-topbar-logo-container">
			<button
				class="layout-menu-button layout-topbar-action"
				@click="onMenuToggle"
			>
				<i class="pi pi-bars"></i>
			</button>
			<RouterLink to="/" class="layout-topbar-logo ml-2">
				<img
					src="@/assets/logo.svg"
					alt="UT Sukabumi"
					class="logo-mini"
					style="height: 30px; width: auto"
				/>
				<span>Universitas Terbuka Sukabumi</span>
			</RouterLink>
		</div>

		<div class="layout-topbar-actions">
			<div class="layout-config-menu">
				<button
					type="button"
					class="layout-topbar-action"
					@click="toggleDarkMode"
				>
					<i
						:class="['pi', { 'pi-moon': isDarkTheme, 'pi-sun': !isDarkTheme }]"
					></i>
				</button>
			</div>

			<button
				class="layout-topbar-menu-button layout-topbar-action"
				v-styleclass="{
					selector: '@next',
					enterFromClass: 'hidden',
					enterActiveClass: 'animate-scalein',
					leaveToClass: 'hidden',
					leaveActiveClass: 'animate-fadeout',
					hideOnOutsideClick: true,
				}"
			>
				<i class="pi pi-ellipsis-v"></i>
			</button>

			<div class="layout-topbar-menu hidden lg:block">
				<div class="layout-topbar-menu-content">
					<button type="button" class="layout-topbar-action">
						<i class="pi pi-calendar"></i>
						<span>Calendar</span>
					</button>
					<button type="button" class="layout-topbar-action">
						<i class="pi pi-inbox"></i>
						<span>Messages</span>
					</button>
					<button type="button" class="layout-topbar-action">
						<i class="pi pi-user"></i>
						<span>Profile</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
