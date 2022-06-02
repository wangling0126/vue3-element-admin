<template>
	<div class="tooltips-box">
		<el-tooltip ref="tlp" :content="text" effect="dark" :disabled="!tooltipFlag" :placement="placement">
			<div :class="getClass()" @mouseenter="visibilityChange" :style="getStyle()">
				<span ref="textContextRef">
					<slot>{{ text }}</slot>
				</span>
			</div>
			<template #content>
				<slot name="content">{{ text }}</slot>
			</template>
		</el-tooltip>
	</div>
</template>

<script setup lang="ts" name="OverShowTooltips">
import { ref, toRefs } from "vue";
type Props = {
	text: string;
	placement?: string;
	rowNum?: number;
};
const props = withDefaults(defineProps<Props>(), {
	text: "",
	placement: "top-start",
	rowNum: 1
});

const { placement, rowNum } = toRefs(props);
const getClass = () => {
	return {
		"one-over-flow": rowNum.value === 1,
		"more-over-flow": rowNum.value > 1
	};
};
const getStyle = () => {
	return {
		"-webkit-line-clamp": rowNum.value
	};
};
const tooltipFlag = ref(false);
const tlp = ref(null);
const textContextRef = ref(null);
// 鼠标移入 - 一行显示tooltips逻辑
const oneLineVisibilityChange = () => {
	// const ev = event.target;
	const textContext = textContextRef.value as Ref<HTMLElement>;
	// 文本的实际宽度
	const ev_weight: number = textContext.getBoundingClientRect().width;
	// 文本容器宽度(父节点)
	let content_weight: number = (tlp.value as Ref<HTMLElement>).$el.parentNode.getBoundingClientRect().width;
	// 这里为什么加0.02，是因为在没有出现三个点时，外面层级总比里面层级多0.01，我也不知道原因
	tooltipFlag.value = ev_weight > content_weight + 0.02;
};

// 鼠标移入 - 多行显示tooltips逻辑
const moreLineVisibilityChange = () => {
	const textContext = textContextRef.value as Ref<HTMLElement>;
	const textRowNum = textContext.getClientRects().length;
	tooltipFlag.value = textRowNum > rowNum.value;
};
const visibilityChange = () => {
	rowNum.value === 1 ? oneLineVisibilityChange() : moreLineVisibilityChange();
};
</script>

<style scoped lang="scss">
.one-over-flow {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	word-break: break-all;
}
.more-over-flow {
	overflow: hidden;
	/*弹性伸缩盒子*/
	display: -webkit-box;
	/*子元素垂直排列*/
	-webkit-box-orient: vertical;
	/*（多行文本的情况下，用省略号“…”隐藏溢出范围的文本)*/
}
.tooltips-box {
	width: 100%;
	margin: 0;
}
</style>
