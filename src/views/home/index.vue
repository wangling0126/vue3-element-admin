<template>
	<div class="home">
		<el-collapse v-model="activeNames">
			<el-collapse-item :title="item.articleType" :name="item.articleType" v-for="item in articlelist" :key="item.name">
				<span @click="goDetail(item)" class="article-item">{{ item.name }}</span>
			</el-collapse-item>
		</el-collapse>
	</div>
	<articleDetailDrawer v-model="visible" :currentArticleInfo="currentArticleInfo"></articleDetailDrawer>
</template>

<script setup lang="ts" name="home">
import articleDetailDrawer from "../article/articleDetailDrawer.vue";
import { articlelist, ArticleType, IArticleItem } from "@/views/home/menuList";
import { ref } from "vue";
const visible = ref(false);
const activeNames: Ref<Array<ArticleType>> = ref(["vue3"]);
const currentArticleInfo: Ref<Partial<IArticleItem>> = ref({});
const goDetail = (val: Array<ArticleType>) => {
	visible.value = true;
	console.log(visible, "true");
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
.home {
	position: relative;
	:deep(.el-collapse-item__header) {
		font-size: 16px;
		font-weight: 700;
	}
	:deep(.el-collapse-item__header.is-active) {
		color: blue;
	}
	.article-item {
		cursor: pointer;
	}
}
</style>
