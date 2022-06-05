<template>
	<div class="home">
		<el-collapse v-model="activeNames" @change="handleChange">
			<el-collapse-item :title="item.articleType" :name="item.articleType" v-for="item in articlelist" :key="item.name">
				<div>{{ item.name }}</div>
			</el-collapse-item>
		</el-collapse>
	</div>
	<articleDetailDrawer :currentArticleInfo="currentArticleInfo"></articleDetailDrawer>
</template>

<script setup lang="ts" name="home">
import articleDetailDrawer from "../article/articleDetailDrawer.vue";
import { articlelist, ArticleType, IArticleItem } from "@/views/home/menuList";
import { ref } from "vue";
const activeNames: Ref<Array<ArticleType>> = ref(["vue3"]);
const currentArticleInfo: Ref<Partial<IArticleItem>> = ref({});
const handleChange = (val: Array<ArticleType>) => {
	currentArticleInfo.value = val;
};
</script>

<style scoped lang="scss">
@import "./index.scss";
.box {
	width: 200px;
	padding: 10px 20px;
	border: 1px solid #888c8c80;
	border-radius: 35px;
	cursor: pointer;
}
</style>
