import { defineStore } from 'pinia'
import api from '../api'

export const useModuleStore = defineStore('demo', {
  state: () => {
    return {
      api: null,
      data: null,
      loading : true,
    };
  },

  actions: {
    async initialize (props) {
      this.loading = true;
      this.data = await api.fetchData()
      this.loading = false;
    }
  },
})

export default useModuleStore;
