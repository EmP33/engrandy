import React from 'react';
import { Wrapper } from './OrderPreview.styles';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import {
  customPack,
  advancedWebsitePack,
  businessWebsitePack,
  landingPagePack,
} from '@/constants/orderPacks';

const OrderPreview: React.FC<{ pack: string }> = ({ pack }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <h3>
        {t('Selected package')}{' '}
        {pack === 'custom-pack'
          ? t('custom-pack')
          : pack === 'landing-page-pack'
          ? t('landing-page-pack')
          : pack === 'business-website-pack'
          ? t('business-website-pack')
          : t('advanced-website-pack')}
        :
      </h3>
      <ul>
        {pack === 'custom-pack' &&
          customPack.offer.map((el: string) => <li key={el}>{t(el)}</li>)}
        {pack === 'landing-page-pack' &&
          landingPagePack.offer.map((el: string) => <li key={el}>{t(el)}</li>)}
        {pack === 'business-website-pack' &&
          businessWebsitePack.offer.map((el: string) => (
            <li key={el}>{t(el)}</li>
          ))}
        {pack === 'advanced-website-pack' &&
          advancedWebsitePack.offer.map((el: string) => (
            <li key={el}>{t(el)}</li>
          ))}
      </ul>
    </Wrapper>
  );
};

export default OrderPreview;
