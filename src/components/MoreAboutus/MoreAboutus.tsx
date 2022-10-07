import { Wrapper } from './MoreAboutus.styles';
import { useTranslation } from 'gatsby-plugin-react-i18next';
// Icons
import {
  IoRocketOutline,
  IoTrendingUpSharp,
  IoBulbSharp,
} from 'react-icons/io5';
import { MdOutlineMilitaryTech } from 'react-icons/md';
import { FaHandshake } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';

const MoreAboutus = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <span>{t('Values')}</span>
      <h2>{t('A little more about us')}</h2>
      <div className="info">
        <div className="info__block">
          <IoRocketOutline />
          <h3>
            {t('We can help you create a professional online business card')}
          </h3>
        </div>
        <div className="info__block">
          <FaHandshake />
          <h3>{t('We offer technical support')}</h3>
        </div>
        <div className="info__block">
          <IoBulbSharp />
          <h3>{t('We use the latest technologies')}</h3>
        </div>
        <div className="info__block">
          <IoTrendingUpSharp />
          <h3>{t('We follow trends')}</h3>
        </div>
        <div className="info__block">
          <MdOutlineMilitaryTech />
          <h3>{t('Individual approach')}</h3>
        </div>
        <div className="info__block">
          <RiTeamFill />
          <h3>{t('Transparent rules of cooperation')}</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default MoreAboutus;
