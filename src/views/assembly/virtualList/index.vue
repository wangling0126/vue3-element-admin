<template>
	<div class="virtualList">
		<div class="hello">
			<button style="margin-top: 30px" type="button" @click="handleVirtualScrollTo">scroll to</button>
			<div
				:ref="containerProps.ref"
				@scroll="containerProps.onScroll"
				style="height: 400px; overflow: auto; border: 1px solid #cccccc"
			>
				<div :style="wrapperProps.style">
					<div
						v-for="active in list"
						:key="active"
						style="height: 59px; border-bottom: 1px solid #cccccc; background-color: white"
					>
						{{ active }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="virtualList">
import { useVirtualList } from "@vueuse/core";
const { list, scrollTo, containerProps, wrapperProps } = useVirtualList(Array.from(Array(99999).keys()), {
	itemHeight: 60,
	overscan: 6
});
const handleVirtualScrollTo = () => {
	scrollTo(22);
};
</script>

<style scoped lang="scss"></style>
