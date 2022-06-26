import { createRouter, createMemoryHistory } from 'vue-router'

export default (options = {}) => {
  const history = options.history || createMemoryHistory();
  const router = createRouter({
    routes: [],
    history,
  })

  return router
}
