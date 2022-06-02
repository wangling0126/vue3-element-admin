<template>
	<div class="show-tooltips-content">
		<el-input-number v-model="rowNum"></el-input-number>
		<div class="show-tooltips-display">
			<OverShowTooltips :text="text" :rowNum="rowNum"></OverShowTooltips>
		</div>
	</div>
</template>

<script setup lang="ts" name="overShowTooltipsShow">
import OverShowTooltips from "@/components/OverShowTooltips/index.vue";
import { ref } from "vue";
const text = ref(
	"医生问病人是怎么骨折的答：我觉得鞋子里有沙子，就扶着电线杆抖鞋，我抖啊抖啊，有个二货以为我触电了抄起木棍就给了我一棒"
);
const rowNum = ref(1);
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
