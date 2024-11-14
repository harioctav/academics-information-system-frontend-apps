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
				{
					path: "/locations/provinces",
					name: "provinces",
					component: () =>
						import("@/views/pages/locations/provinces/Index.vue"),
				},
				{
					path: "/locations/provinces/create",
					name: "provinces.create",
					component: () =>
						import("@/views/pages/locations/provinces/Create.vue"),
				},
				{
					path: "/locations/regencies",
					name: "regencies",
					component: () =>
						import("@/views/pages/locations/regencies/Index.vue"),
				},
				{
					path: "/locations/regencies/create",
					name: "regencies.create",
					component: () =>
						import("@/views/pages/locations/regencies/Create.vue"),
				},
				{
					path: "/locations/districts",
					name: "districts",
					component: () =>
						import("@/views/pages/locations/districts/Index.vue"),
				},
				{
					path: "/locations/villages",
					name: "villages",
					component: () => import("@/views/pages/locations/villages/Index.vue"),
				},
				{
					path: "/settings/users",
					name: "users",
					component: () => import("@/views/pages/settings/users/Index.vue"),
				},
				{
					path: "/settings/roles",
					name: "roles",
					component: () => import("@/views/pages/settings/roles/Index.vue"),
				},
				{
					path: "/academics/students",
					name: "students",
					component: () => import("@/views/pages/academics/students/Index.vue"),
				},
				{
					path: "/academics/majors",
					name: "majors",
					component: () => import("@/views/pages/academics/majors/Index.vue"),
				},
				{
					path: "/academics/subjects",
					name: "subjects",
					component: () => import("@/views/pages/academics/subjects/Index.vue"),
				},
			],
		},
		{
			path: "/auth/login",
			name: "login",
			component: () => import("@/views/pages/auth/Login.vue"),
		},
		{
			path: "/pages/notfound",
			name: "notfound",
			component: () => import("@/views/pages/NotFound.vue"),
		},
		{
			path: "/auth/error",
			name: "error",
			component: () => import("@/views/pages/auth/Error.vue"),
		},
	],
});

export default router;
