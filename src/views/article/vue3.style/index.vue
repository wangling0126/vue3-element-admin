<template>
	<div class="vue3-style">
		<h2>1.使用v-bind</h2>
		<div class="show-color">显示颜色</div>
		<el-button @click="changeColor">点击切换颜色</el-button>
	</div>
</template>

<script setup lang="ts" name="vue3Style">
import { ref } from "vue";
const color = ref("red");
const changeColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	color.value = `rgb(${r}, ${g}, ${b})`;
};
</script>

<style scoped lang="scss">
.show-color {
	color: v-bind(color);
}
</style>
