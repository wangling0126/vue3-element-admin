# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

# 项目初始化工作
## 生成项目
```bash
npm init vite@latest 
```
选择vue就可以了

## less使用
不需要做其他的配置
```bash
yarn add less
```

## resolve.alias别名配置
```bash
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
      'components': '/src/components'
    }
  }
})
```
## vite中的TS
vite中的TS默认只编译为js,不会检验,怎么理解
比如我写了这么一段代码,在webstorm里面会爆红，但是编译还是会通过，不会去进行ts校验的问题，还是可以访问
```ts
type name = string
let aa:name = 12
```
```
现在vite在线上环境解决方案在package.json加了一个`vue-tsc --noEmit `
​```bash
"build": "vue-tsc --noEmit && vite build",
```
我们在创建vite项目时，选择ts它会自动创建一个文件`tsconfig.json`

## vite中eslint & pritter
https://blog.csdn.net/sinat_36728518/article/details/117856937
https://www.jianshu.com/p/4b94540dd998
husky 在eslint没通过时，不能git commit

## 安装必要插件
### 安装[vue-router4](https://router.vuejs.org/zh/installation.html#npm)
```bash
yarn add vue-router@4
```
使用时遇到了一个错误,使用template会报一个运行时错误
```js
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
```
> runtime-core.esm-bundler.js:38 [Vue warn]: Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".
https://www.jianshu.com/p/4b0d7701103b

什么意思呢？其实就是vue用很多版本，默认是 仅包含运行时的vue(.runtime).esm-bundler.js, template 选项的模版字符串不能由runtime编译，而是需要有编译器的完整构建版本。
[具体看分析以及解决看这里](https://www.jianshu.com/p/4b0d7701103b)


## 后台管理的项目参考
Geeker-Admin 后台管理系统 ： https://juejin.cn/post/7080820051422478366
