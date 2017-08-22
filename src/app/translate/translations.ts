// app/translate/translation.ts

import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_ES_NAME, LANG_ES_TRANS } from './lang-es';
import { LANG_ZH_NAME, LANG_ZH_TRANS } from './lang-zh';
import { LANG_MK_NAME, LANG_MK_TRANS } from './lang-mk';
// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all traslations
const dictionary = {
	'en': LANG_EN_TRANS,
	'es': LANG_ES_TRANS,
	'zh': LANG_ZH_TRANS,
	'mk': LANG_MK_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
	{ provide: TRANSLATIONS, useValue: dictionary },
];