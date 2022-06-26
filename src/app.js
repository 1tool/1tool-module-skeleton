import App from './App.vue'

import api from './api'
import config from './config'

import PrimeVue from "primevue/config";
import createRouter from './router'
import { createPinia } from 'pinia'
import { createApp, h } from "vue";
import { useAppStore } from './store'
import { createI18n } from 'vue-i18n'

export default class FrontendApp {
  constructor() {
    this.config = config
  }
  async init (options = {}) {
    const canvas = document.getElementById('frontend-canvas');
    const module = canvas ? canvas.dataset.module : null;

    if (module && canvas) {
      let props = canvas.dataset.props ? JSON.parse(canvas.dataset.props) : {};

      const pinia = createPinia()
      const router = createRouter()

      const app = createApp({
        name: 'FrontendApp',
        render: () => h(App),
        ...options.vue,
      })

      app.use(pinia)
      app.use(router)
      app.use(PrimeVue)

      const store = useAppStore()
      store.module = module.toLowerCase()

      const { routes, defaultRoute, useModuleStore, messages } = await import(`./apps/${module}`)

      const i18n = createI18n({
        messages,
        locale: 'de',
        fallbackLocale: 'en',
      })
      app.use(i18n)

      const moduleStore = useModuleStore();
      moduleStore.api = api;
      moduleStore.props = props;

      routes.map(route => router.addRoute(route))
      router.push({ name: defaultRoute })

      app.mount(canvas);
    }
  }
}
