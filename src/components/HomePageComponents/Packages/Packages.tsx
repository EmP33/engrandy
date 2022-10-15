import PrimaryButton from '../../Utils/PrimaryButton';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import { Wrapper } from './Packages.styles';
import { BsCheck } from 'react-icons/bs';

import {
  customPack,
  advancedWebsitePack,
  businessWebsitePack,
  landingPagePack,
} from '@/constants/orderPacks';

const Packages = () => {
  const { t } = useTranslation();

  console.log(landingPagePack);

  return (
    <Wrapper>
      <h2 data-aos="fade-up">
        {t('Choose one of the basic packages for yourself')}
      </h2>
      <div className="packages">
        <div className="packages__package" data-aos="fade-right">
          <h3>{t(landingPagePack.title)}</h3>
          <ul>
            {landingPagePack.offer.map((el) => (
              <li key={el}>
                <BsCheck />
                <span>{t(el)}</span>
              </li>
            ))}
          </ul>
          <div className="package__action">
            <h4>{t(landingPagePack.price)}</h4>
            <PrimaryButton
              link="/builder?pack=landing-page-pack"
              text={t('Order now')}
            />
          </div>
        </div>
        <div className="packages__package" data-aos="fade-up">
          <h3>{t(businessWebsitePack.title)}</h3>
          <ul>
            {businessWebsitePack.offer.map((el) => (
              <li key={el}>
                <BsCheck />
                <span>{t(el)}</span>
              </li>
            ))}
          </ul>
          <div className="package__action">
            <h4>{t(businessWebsitePack.price)}</h4>
            <PrimaryButton
              link="/builder?pack=business-website-pack"
              text={t('Order now')}
            />
          </div>
        </div>
        <div className="packages__package" data-aos="fade-left">
          <h3>{t(advancedWebsitePack.title)}</h3>
          <ul>
            {advancedWebsitePack.offer.map((el) => (
              <li key={el}>
                <BsCheck />
                <span>{t(el)}</span>
              </li>
            ))}
          </ul>
          <div className="package__action">
            <h4>{t(advancedWebsitePack.price)}</h4>
            <PrimaryButton
              link="/builder?pack=advanced-website-pack"
              text={t('Order now')}
            />
          </div>
        </div>
      </div>
      <span>
        {t('After selecting the package, you will be redirected to')}{' '}
        <Link to="/builder?pack=custom-pack">{t('The order builder')}</Link> .
      </span>
    </Wrapper>
  );
};

export default Packages;
