/**
 * v-copy
 * 复制某个值至剪贴板
 * 接收参数：string类型/Ref<string>类型/Reactive<string>类型
 */
import type { Directive, DirectiveBinding } from "vue";
type Zindex = {
	style?: {
		zIndex?: number;
	};
};
type CpyHTMLInputElement = HTMLInputElement;
type CustomHTMLInputElement = CpyHTMLInputElement | Zindex;

import { ElMessage } from "element-plus";
interface ElType extends HTMLElement {
	copyData: string | number;
	__handleClick__: any;
}
const copy: Directive = {
	mounted(el: ElType, binding: DirectiveBinding) {
		el.copyData = binding.value;
		el.addEventListener("click", handleClick);
	},
	updated(el: ElType, binding: DirectiveBinding) {
		el.copyData = binding.value;
	},
	beforeUnmount(el: ElType) {
		el.removeEventListener("click", el.__handleClick__);
	}
};

function handleClick(this: any) {
	const input: CustomHTMLInputElement = document.createElement("input");
	input.value = this.copyData.toLocaleString();
	input.style.position = "absolute";
	input.style.zIndex = 99999;
	input.style.left = 0;
	input.style.top = 0;
	document.body.appendChild(input);
	setTimeout(() => {
		input.focus();
		input.select();
		document.execCommand("Copy");
		// document.body.removeChild(input);
		ElMessage({
			type: "success",
			message: "复制成功"
		});
	}, 0);
}

export default copy;
