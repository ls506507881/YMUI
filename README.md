# YMUI

基于 Vue3 + Vite + Vue Router + TypeScript 的 UI 课程

### window 开发环境搭建

- 安装 Node.js 稳定版
- 安装 npm（不需要安装，Node.js 自带 npm）
- npm 下载加速（使用 nrm）
- 安装 yarn（进入 https://classic.yarnpkg.com/zh-Hans/ 往下滚，点击「下载安装程序」，下载后将 yarn 安装到 D:\yarn 或者 C:\yarn 然后一路点击「下一步」即可安装）
- 安装 VSCode

### 使用 Vite 脚手架

```
  // 全局安装Vite
  yarn global add create-vite-app@1.18.0

  // 创建项目
  cva YMUI

  cd YMUI
  npm install (or 'yarn')
  npm run dev (or 'yarn dev')
```

### 引入 Vue Router 4

- 安装 vue router

```
  // 使用命令号查看 vue-router所有版本号
  npm info vue-router versions

  // 安装最新版
  yarn add vue-router@4.0.0-beta.13
```

- 初始化 vue router

```
  - 新建 history 对象
  - 新建 router 对象
  - 引入TypeScript
  - app.use(router)
  - 添加<router-view>  // 显示路由
  - 添加<router-link>  // 通过to跳转页面

  // src/main.ts
  import { createApp } from 'vue'
  import App from './App.vue'
  import './index.css'
  import { createWebHashHistory, createRouter } from 'vue-router'
  // vue-router 3种路由结构
  // createMemoryHistory, // 内存型路由
  // createWebHashHistory,  // Hash型路由
  // createWebHistory,  // History型路由

  import Frank from './components/Frank.vue'

  const history = createWebHashHistory()
  const router = createRouter({
    history,
    routes: [{ path: '/', component: Frank }],
  })

  const app = createApp(App)
  app.use(router)
  app.mount('#app')

```

### 用 provide 和 inject 实现全局变量

App.vue:

```
  import { ref, provide } from "vue";
  export default {
    name: "App",
    setup() {
      const asideVisible = ref(false);
      provide("asideVisible", asideVisible); // set
    }
  };

```

Index.vue:

```
  <template>
    <div class="btn" @click="toggleMenu">toggle</btn>
  </template>
  <script lang="ts">
    import { inject, Ref } from "vue";
    export default {
      setup() {
        const asideVisible = inject<Ref<boolean>>('asideVisible');  // get
        console.log('asideVisible:' + asideVisible.value)
        const toggleMenu = ()=>{
          asideVisible.value = !asideVisible.value
        }
        return { toggleMenu }
      }
    };
  </script>
```
