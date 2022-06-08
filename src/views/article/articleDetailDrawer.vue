<template>
	<el-drawer v-model="visible" :title="titleRef" :direction="directionRef" custom-class="drawer-container">
		<el-tabs v-model="activeName" type="card" class="demo-tabs">
			<el-tab-pane label="代码" name="code">
				<div class="code-container">
					<PreViewCode :code="code" :type="type"> </PreViewCode>
				</div>
			</el-tab-pane>
			<el-tab-pane label="效果" name="show">
				<component :is="componentName"></component>
			</el-tab-pane>
		</el-tabs>
	</el-drawer>
</template>
<!--https://blog.csdn.net/qq_27084325/article/details/123717688-->
<script setup lang="ts" name="articleDetailDrawer">
import PreViewCode from "@/components/PreViewCode/index.vue";
import { ref, computed, watch, toRefs } from "vue";
const props = defineProps({
	currentArticleInfo: {
		type: Object,
		default: () => {}
	},
	visible: {
		type: Boolean,
		default: false
	}
});
const { visible, currentArticleInfo } = toRefs(props);
const directionRef: string = "rtl";
// 高亮语言类型, 如果配置不是 all 的话, 这个类型需要加在配置中
const type = "html";
const activeName = ref("show");
const fileAddress = computed(() => {
	return `${currentArticleInfo.value?.address}`;
});
const titleRef = computed(() => {
	return currentArticleInfo.value?.name || "题目";
});
const code = ref("");
let componentName = ref(() => {});
watch(fileAddress, newVal => {
	import(`../article/${newVal}?raw`).then(module => {
		code.value = module.default;
	});
	import(`../article/${newVal}`).then(module => {
		componentName.value = module.default;
		console.log(componentName.value);
	});
});
</script>

<style lang="scss">
.drawer-container {
	width: 80% !important;
}
</style>
<style scoped lang="scss">
.code-container {
	position: relative;
	.btn-copy {
		position: absolute;
		right: 0;
	}
}
</style>
