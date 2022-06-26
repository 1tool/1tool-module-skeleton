const authorizationTokenTag = document.head.querySelector(
  'meta[name="auth-token"]'
)
const authorizationToken = authorizationTokenTag
  ? authorizationTokenTag.content
  : null

  const tenantIdTag = document.head.querySelector(
    'meta[name="tenant-id"]'
  )
  const tenantId = tenantIdTag
  ? tenantIdTag.content
  : null

  const apiBaseUrlTag = document.head.querySelector(
    'meta[name="api-endpoint"]'
  )
  const apiBaseUrl = apiBaseUrlTag
  ? apiBaseUrlTag.content
  : null

  export default {
    tenantId,
    apiBaseUrl,
    authorizationToken,
}
