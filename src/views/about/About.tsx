import React from 'react';
import { useTranslation } from 'react-i18next';

// Styles
import './About.scss';

const About: React.FC = () => {
  // Translate
  const { t } = useTranslation();
  return <>
    <div data-testid="about">
      {t('about')}
    </div>
  </>;
};

export default About;
