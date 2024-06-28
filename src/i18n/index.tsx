import { createI18n } from 'vue-i18n'

import localesVI from './locales/vi'
import localesEN from './locales/en'
import localesJA from './locales/ja'

const i18n = createI18n({
    legacy: false,
    locale: 'vi',
    fallbackLocale: 'en',
    messages: {
        vi: localesVI,
        en: localesEN,
        ja: localesJA
    }
})

export default i18n
