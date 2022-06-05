<template>
	<el-drawer v-model="isVisibleRef" title="测试" :direction="directionRef" custom-class="drawer-container">
		<div class="code-container">
			<el-button class="btn-copy" v-copy="code"> copy</el-button>
			<PreViewCode :code="code" :type="type"> </PreViewCode>
		</div>
	</el-drawer>
</template>
<!--https://blog.csdn.net/qq_27084325/article/details/123717688-->
<script setup lang="ts" name="articleDetailDrawer">
import PreViewCode from "@/components/PreViewCode/index.vue";
// import { readFile } from "fs";
import { ref } from "vue";
defineProps({
	currentArticleInfo: {
		type: Object,
		default: () => {}
	}
});
const isVisibleRef = ref(true);
const directionRef: string = "rtl";
// 高亮语言类型, 如果配置不是 all 的话, 这个类型需要加在配置中
// const type = computed(() => {
// 	return currentArticleInfo.value.codeType;
// });
const type = "html";
// const prevAddress = "@/views/article/";
// const fileAddress = computed(() => {
// 	return `${prevAddress}${currentArticleInfo.value.address}`;
// });

// 高亮代码
const code = ref("");
// readFile(fileAddress.value, (err: any, buffer: any) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(buffer.toString(), "二进制");
// 		code.value = buffer.toString();
// 	}
// });
code.value = `<target><!-- 模拟数据 -->
      <target>var data = 1</target><target>var data = 1</target>
      <target>var data = 1</target><target>var data = 1</target>
      <target>var data = 1</target><target>var data = 1</target>
      <target>var data = 1</target>
</target>`;
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
