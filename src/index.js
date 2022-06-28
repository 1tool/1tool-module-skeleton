import FrontendApp from './app.js'

const app = new FrontendApp()

window.FrontendApp = app
document.addEventListener('DOMContentLoaded', () => {
  app.init()
})
  