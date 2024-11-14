import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			component: () => import("@/layouts/AppLayout.vue"),
			children: [
				{
					path: "/",
					name: "dashboard",
					component: () => import("@/views/Dashboard.vue"),
				},
			],
		},
		{
			path: "/auth/login",
			name: "login",
			component: () => import("@/views/pages/auth/Login.vue"),
		},
		{
			path: "/auth/error",
			name: "error",
			component: () => import("@/views/pages/auth/Error.vue"),
		},
	],
});

export default router;
