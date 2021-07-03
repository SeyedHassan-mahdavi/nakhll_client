import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_en from './../en/subSystem/common/common-en.json'
import eshop_en from './../en/subSystem/eshop/eshop-en.json';
import www_en from './../en/subSystem/www/www-en.json';
import common_fa from './../fa/subSystem/common/common-fa.json'
import eshop_fa from './../fa/subSystem/eshop/eshop-fa.json';
import www_fa from './../fa/subSystem/www/www-fa.json';

const resources = {

    en: {
        common: common_en,
        eshop: eshop_en,
        www: www_en
    },
    fa: {
        common: common_fa,
        eshop: eshop_fa,
        www: www_fa
    },
    // fr: {

    // }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        interpolation: { escapeValue: false }
    })

export default i18n;