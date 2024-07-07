import { createI18n } from 'vue-i18n'

import { localesEN, localesJA, localesVI } from './locales'
const cachedLocale = localStorage.getItem('locale') || 'en'

const i18n = createI18n({
    legacy: false,
    locale: cachedLocale,
    fallbackLocale: 'vi',
    messages: {
        vi: localesVI,
        en: localesEN,
        ja: localesJA
    }
})

export default i18n
