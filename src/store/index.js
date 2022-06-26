import api from '../api'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    module: null,
  }),
  getters: {},
  actions: {},
})
