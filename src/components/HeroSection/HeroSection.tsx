import Map from '@/assets/Map';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
// Styles
import { Wrapper } from './HeroSection.styles';
import Hero from '@/assets/Hero';
// Components
import PrimaryButton from '../Utils/PrimaryButton';
import OutlineButton from '../Utils/OutlineButton';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div className="hero-content">
        <div className="hero-content__heading" data-aos="fade-up">
          <span>Engrandy</span>
          <h1>
            {t('Create')} <span>{t('professional website')}</span>{' '}
            {t('at a promotional price')}
          </h1>
          <h2>
            {t(
              'Check out our builder to find out all about the cost of your project',
            )}
          </h2>
          <div className="heading-actions">
            <PrimaryButton text={t('Contact us')} />
            <OutlineButton text={t('Go to the builder')} />
          </div>
        </div>
        <div className="hero-content__image">
          <Hero />
        </div>
      </div>
      <Map />
    </Wrapper>
  );
};

export default HeroSection;
