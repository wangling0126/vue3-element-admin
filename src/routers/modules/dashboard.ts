import { RouteRecordRaw } from "vue-router";
import { empty } from "@/routers/constant";

// dashboard 模块
const dashboardRouter: Array<RouteRecordRaw> = [
	{
		path: "/dashboard",
		component: empty,
		redirect: "/dashboard/dataVisualize",
		meta: {
			title: "Dashboard"
		},
		children: [
			{
				path: "/dashboard/dataVisualize",
				name: "dataVisualize",
				component: () => import("@/views/dashboard/dataVisualize/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "数据可视化",
					key: "dataVisualize"
				}
			},
			{
				path: "/dashboard/embedded",
				name: "embedded",
				component: () => import("@/views/dashboard/embedded/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "内嵌页面",
					key: "embedded"
				}
			}
		]
	}
];

export default dashboardRouter;
