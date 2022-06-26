import axios from 'redaxios'
import config from '../config'

const headers = {
  'X-Tenant': config.tenantId,
  Authorization: `Bearer ${config.authorizationToken}`,
  'Accept': 'application/json'
}

const api = axios.create({
  baseURL: config.apiBaseUrl,
  headers
})

export default api
