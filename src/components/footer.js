import React from 'react';

import '../assets/css/main.css';
import { useTranslation } from 'react-i18next';
import {
  // eslint-disable-next-line import/named
  footerContent
} from '../Constants/Constants';

const AppFooter = () => {
  const { t } = useTranslation('translations');
  return (
    <div className="footer">
      <div className="author">
        <h2> 
          <a href={footerContent.authorLink} target="blank">{t('footer.authorText')}</a>
        </h2>
        <h3><a href={footerContent.authorGitHubLink} target="blank">{t('footer.authorGitHubText')}</a></h3>
      </div>
    </div>
  );
};

export default AppFooter;
