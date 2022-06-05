import { ref, Ref } from "vue";
export type ArticleType = "vue3" | "pinia";
export interface IArticleItem {
	name: string;
	address: string;
	articleType: ArticleType;
	codeType: string;
}
// string
type ArticleList = Array<IArticleItem>;

const vue3List: ArticleList = [
	{
		name: "teleport的使用",
		address: "vue3.teleport/index.vue",
		articleType: "vue3",
		codeType: "vue"
	}
];
export const articlelist: Ref<ArticleList> = ref([...vue3List]);
