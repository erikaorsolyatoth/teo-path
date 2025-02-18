import { createI18n } from 'vue-i18n';

const messages = {
    en: require('./locales/en.json'),
    hu: require('./locales/hu.json'),
    ro: require('./locales/ro.json'),
};

const i18n = createI18n({
    legacy: false,
    locale: 'en', // default lang
    fallbackLocale: 'en',
    messages,
});

export default i18n;
