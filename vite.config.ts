import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import { wrapperEnv } from "./src/utils/getEnv";
// https://vitejs.dev/config/
export default defineConfig((mode) => {
  const env = loadEnv(mode.mode, process.cwd());
  const viteEnv = wrapperEnv(env);
  return {
    plugins: [
      vue()
    ],
    resolve: {
      alias: {
        '@': '/src',
        'components': '/src/components'
      },
      // extensions: ['ts', 'vue', 'less']
    },
    // server config
    server: {
      host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      cors: true,
      // https: false,
      // 代理跨域
      proxy: {
        "/api": {
          target: "https://www.fastmock.site/mock/f81e8333c1a9276214bcdbc170d9e0a0",
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, "")
        }
      }
    }
  }
})
