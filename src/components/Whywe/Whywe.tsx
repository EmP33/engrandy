import { useTranslation } from 'gatsby-plugin-react-i18next';
import Blob from '@/assets/Blob';
import Technologies from '@/assets/Technologies';
// Styles
import { Wrapper } from './Whywe.styles';
// Icons
import { RiTimerFlashFill, RiBillFill } from 'react-icons/ri';
import { MdOutlineStackedLineChart } from 'react-icons/md';
import { ImPriceTag } from 'react-icons/im';
import { GiTrophyCup } from 'react-icons/gi';
import { IoHelp } from 'react-icons/io5';

const Whywe = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Blob />
      <Blob />
      <div className="content-wrapper">
        <h2>{t('Why Engrandy')}</h2>
        <div className="content-blocks">
          <div className="content-blocks__block">
            <RiTimerFlashFill />
            <h3>{t('Page speed')}</h3>
            <p>
              {t(
                'Thanks to the latest technologies used to create websites, we can guarantee that your website will be fast and thus better positioned',
              )}
            </p>
          </div>
          <div className="content-blocks__block">
            <RiBillFill />
            <h3>{t('Order transparency')}</h3>
            <p>
              {t(
                'We give you many options for personalizing your order, so you will know in advance what exactly you are ordering. You can use the order builder or choose one of the basic packages',
              )}
            </p>
          </div>
          <div className="content-blocks__block">
            <MdOutlineStackedLineChart />
            <h3>{t('The positioning of the page')}</h3>
            <p>
              {t(
                'Thanks to the high-quality code, your website will be better positioned compared to other pages in the search results',
              )}
            </p>
          </div>
          <div className="content-blocks__block">
            <ImPriceTag />
            <h3>{t('Price to quality')}</h3>
            <p>
              {t(
                'We guarantee you good quality at an affordable price, as well as fast implementation',
              )}
            </p>
          </div>
          <div className="content-blocks__block">
            <GiTrophyCup />
            <h3>{t('Uniqueness')}</h3>
            <p>
              {t(
                "Each page is created on the basis of an individual graphic design tailored to the client's needs. Your website will be unique",
              )}
            </p>
          </div>
          <div className="content-blocks__block">
            <IoHelp />
            <h3>{t('Support')}</h3>
            <p>
              {t(
                'After creating the website, you get free support for the next year in case of any problems',
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="technologies-wrapper">
        <Technologies />
      </div>
    </Wrapper>
  );
};

export default Whywe;
