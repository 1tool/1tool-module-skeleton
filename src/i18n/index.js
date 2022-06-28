import { createI18n } from 'vue-i18n'

export default (messages = {}, options) => {
  options = options || {
    fallbackLocale: 'en',
    locale: 'de',
  }

  options.messages = messages

  const i18n = createI18n(options)

  return i18n
}
