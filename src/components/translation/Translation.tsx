import React from 'react';
import { useTranslation } from 'react-i18next';
// Styles
import './Translation.scss';

// Variables
import PortugalFlag from '@/assets/img/Portugal.svg';
import EuaFlag from '@/assets/img/en.png';

// Types
import { LangSelectorInterface } from './Translation.model';

const TranslationComponent: React.FC = () => {
  const { i18n: i18n } = useTranslation();
  const lngs: LangSelectorInterface = {
    en: {
      nativeName: 'en',
    },
    ptBr: {
      nativeName: 'pt',
    },
  };
  // Methods
  function controlLanguage(lng: string) {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="translation__selectLanguage flex justify-end">
      {lngs &&
        Object.keys(lngs).map((lng) => {
          return (
            <div key={lng}>
              <img
                src={lng === 'en' ? EuaFlag : PortugalFlag}
                className="cursor-pointer img-wrapper"
                onClick={() => controlLanguage(lng)}
              />
            </div>
          );
        })}
    </div>
  );
};

export default TranslationComponent;
