import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import IconDemo from './components/IconDemo.vue'
import SpinnerDemo from './components/spinnerDemo.vue'
// import SvgIcon from './components/svg-icon.vue'
import LoadDemo from './components/LoadDemo.vue'
// import Field from './components/field.vue'
// import Scroll from './components/scroll.vue'
// import ScrollCeil from './components/scroll-ceil.vue'
// import Tab from './components/tab.vue'
// import Img from './components/img.vue'
// import Video from './components/video.vue'
// import Message from './components/message.vue'
// import FloatBtn from './components/float-btn.vue'
// import NotFound from './components/not-found.vue'
// import PanelTitle from './components/panel-title.vue'

import { h } from 'vue'
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
const history = createWebHashHistory()
const md = (string) => h(Markdown, { content: string, key: string })
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', redirect: '/doc/intro' },
        { path: 'intro', component: md(intro) },
        { path: 'get-started', component: md(getStarted) },
        { path: 'install', component: md(install) },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'icon', component: IconDemo },
        { path: 'spinner', component: SpinnerDemo },
        // { path: 'svg-icon', component: SvgIcon },
        { path: 'load', component: LoadDemo },
        // { path: 'field', component: Field },
        // { path: 'scroll', component: Scroll },
        // { path: 'scroll-ceil', component: ScrollCeil },
        // { path: 'tab', component: Tab },
        // { path: 'img', component: Img },
        // { path: 'video', component: Video },
        // { path: 'message', component: Message },
        // { path: 'float-btn', component: FloatBtn },
        // { path: 'not-found', component: NotFound },
        // { path: 'panel-title', component: PanelTitle },
      ],
    },
  ],
})
router.afterEach(() => {
  console.log('路由切换了')
})
