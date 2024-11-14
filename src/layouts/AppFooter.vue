<script setup></script>

<template>
	<div class="layout-footer">
		<RouterLink :to="{ name: 'dashboard' }" class="footer-link">
			<img
				src="@/assets/logo.svg"
				alt="UT Sukabumi"
				class="logo-mini"
				style="height: 30px; width: auto"
			/>
			<span>Universitas Terbuka Sukabumi</span>
		</RouterLink>
	</div>
</template>
