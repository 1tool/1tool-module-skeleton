import App from './App.vue'

import api from './api'
import config from './config'

import PrimeVue from "primevue/config";
import createI18n from './i18n';
import createRouter from './router'
import { useAppStore } from './store'
import { createPinia } from 'pinia'
import { createApp, h } from "vue";

export default class FrontendApp {
  constructor() {
    this.config = config
  }
  async init (options = {}) {
    const canvas = document.getElementById('frontend-canvas');

    if (canvas) {
      const i18n = createI18n()
      const pinia = createPinia()
      const router = createRouter()
  
      const app = createApp({
        name: 'FrontendApp',
        render: () => h(App),
        ...options.vue,
      })

      app.use(i18n)
      app.use(pinia)
      app.use(router)
      app.use(PrimeVue)

      this.app = app;
      this.i18n = i18n;
      this.router = router;

      const module = canvas ? canvas.dataset.module : null;
  
      if (module) {
        let props = canvas.dataset.props ? JSON.parse(canvas.dataset.props) : {};
        this.load(module, props)
      }

      app.mount(canvas);
    }
  }

  async load (module = '', props) {
    useAppStore().module = module.toLowerCase()

    //- Load module
    const { routes, defaultRoute, useModuleStore, messages } = await import(`./apps/${module}`)

    //- Inject props and api into module store
    const moduleStore = useModuleStore();
    moduleStore.props = props;
    moduleStore.api = api;

    //- Load locale messages
    for (const locale in messages) {
      if (Object.hasOwnProperty.call(messages, locale)) {
        this.i18n.global.setLocaleMessage(locale, messages[locale])
      }
    }

    //- Load module routes
    routes.map(route => this.router.addRoute(route))
    this.router.push({ name: defaultRoute })
  }
}
