import { RouteRecordRaw } from "vue-router";
import { Layout } from "@/routers/constant";

// 常用组件模块
const assemblyRouter: Array<RouteRecordRaw> = [
	{
		path: "/assembly",
		component: Layout,
		redirect: "/assembly/selectIcon",
		meta: {
			title: "assembly"
		},
		children: [
			{
				path: "/assembly/selectIcon",
				name: "selectIcon",
				component: () => import("@/views/assembly/selectIcon/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "Icon 选择",
					key: "selectIcon"
				}
			},
			{
				path: "/assembly/batchImport",
				name: "batchImport",
				component: () => import("@/views/assembly/batchImport/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "批量导入数据",
					key: "batchImport"
				}
			},
			{
				path: "/assembly/overShowTooltips",
				name: "overShowTooltips",
				component: () => import("@/views/assembly/overShowTooltips/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "超出显示...",
					key: "overShowTooltips"
				}
			},
			{
				path: "/assembly/virtualList",
				name: "virtualList",
				component: () => import("@/views/assembly/virtualList/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "虚拟列表",
					key: "virtualList"
				}
			}
		]
	}
];

export default assemblyRouter;
