<template>
	<!--
to: 把元素放入哪个元素里  body,选择器等
  正确
	<teleport to="body" />
	<teleport to="#some-id" />
	<teleport to=".some-class" />
	<teleport to="[data-teleport]" />
	错误
	<teleport to="h1" />
  <teleport to="some-string" />
disabled: 此可选属性可用于禁用 <teleport> 的功能，这意味着其插槽内容将不会移动到任何位置，而是在你在周围父组件中指定了 <teleport> 的位置渲染。
-->
	<teleport to="#app" :disabled="false">
		<div class="teleport-study"></div>
	</teleport>
</template>

<script setup lang="ts" name="teleport"></script>

<style scoped lang="scss">
.teleport-study {
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	top: 0;
	background: rgba(0, 0, 0, 0.6);
	z-index: 100;
}
</style>
