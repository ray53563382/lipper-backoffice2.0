import LocalStorage from './local-storage';
import { LANGUAGE, ES, EN } from '../constants';
import ES_DIC from '../assets/translations/es.json';
import EN_DIC from '../assets/translations/en.json';

const getBrowserLanguage = () => {
    let browserLanguage = navigator.language || navigator.userLanguage; 
    if(!browserLanguage) return ES;
    const codeLanguage = browserLanguage.slice(0,2).toLowerCase();
    console.log(codeLanguage);
    switch(codeLanguage) {
        case 'es':
            return ES;
        case 'en':
            return EN;
        default:
            return ES;
    }
}

const TranslateService = {
    get: (key) => {
        let defaultLanguage = LocalStorage.get(LANGUAGE);

        if (!defaultLanguage) {
            defaultLanguage = getBrowserLanguage();

            LocalStorage.set(LANGUAGE, defaultLanguage);
        }
        switch (defaultLanguage) {
            case ES:
                return ES_DIC[key] || key;
            case EN:
                return EN_DIC[key] || key;
            default:
                return key;
        }
    },
}

export default TranslateService;
