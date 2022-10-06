import PrimaryButton from '../Utils/PrimaryButton';
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import { Wrapper } from './Packages.styles';
import { BsCheck } from 'react-icons/bs';

const Packages = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <h2 data-aos="fade-up">
        {t('Choose one of the basic packages for yourself')}
      </h2>
      <div className="packages">
        <div className="packages__package" data-aos="fade-right">
          <h3>{t('Web page')}</h3>
          <ul>
            <li>
              <BsCheck />
              <span>{t('Professional website')}</span>
            </li>
            <li>
              <BsCheck />
              <span>{t('Adaptation to the phone version (RWD)')}</span>
            </li>
            <li>
              <BsCheck />
              <span>{t('Backup')}</span>
            </li>
            <li>
              <BsCheck />
              <span>{t('Technical support for 1 year')}</span>
            </li>
            <li>
              <BsCheck />
              <span>{t('Photos and icons with license')}</span>
            </li>
            <li>
              <BsCheck />
              <span>{t('Configuration of the contact form')}</span>
            </li>
            <li>
              <BsCheck />
              <span>{t('Privacy policy')}</span>
            </li>
            <li>
              <BsCheck />
              <span>1 {t('Page')}</span>
            </li>
          </ul>
          <div className="package__action">
            <h4>{t('$90')}</h4>
            <PrimaryButton text={t('Order now')} />
          </div>
        </div>
        <div className="packages__package" data-aos="fade-up">
          <h3>{t('Web page')}</h3>
          <ul>
            <li>
              <BsCheck />
              <span>{t('Professional website')}</span>
            </li>
            <li>
              <BsCheck />
              <span>{t('Adaptation to the phone version (RWD)')}</span>
            </li>
            <li>
              <BsCheck />
              <span>{t('Backup')}</span>
            </li>
            <li>
              <BsCheck />
              <span>{t('Technical support for 1 year')}</span>
            </li>
            <li>
              <BsCheck />
              <span>{t('Photos and icons with license')}</span>
            </li>
            <li>
              <BsCheck />
              <span>{t('Configuration of the contact form')}</span>
            </li>
            <li>
              <BsCheck />
              <span>{t('Privacy policy')}</span>
            </li>
            <li>
              <BsCheck />
              <span>3 {t('Pages')}</span>
            </li>
          </ul>
          <div className="package__action">
            <h4>{t('$150')}</h4>
            <PrimaryButton text={t('Order now')} />
          </div>
        </div>
        <div className="packages__package" data-aos="fade-left">
          <h3>{t('Web page')}</h3>
          <ul>
            <li>
              <BsCheck />
              <span>{t('Professional website')}</span>
            </li>
            <li>
              <BsCheck />
              <span>{t('Adaptation to the phone version (RWD)')}</span>
            </li>
            <li>
              <BsCheck />
              <span>{t('Backup')}</span>
            </li>
            <li>
              <BsCheck />
              <span>{t('Technical support for 1 year')}</span>
            </li>
            <li>
              <BsCheck />
              <span>{t('Photos and icons with license')}</span>
            </li>
            <li>
              <BsCheck />
              <span>{t('Configuration of the contact form')}</span>
            </li>
            <li>
              <BsCheck />
              <span>{t('Privacy policy')}</span>
            </li>
            <li>
              <BsCheck />
              <span>5 {t('Pages2')}</span>
            </li>
          </ul>
          <div className="package__action">
            <h4>{t('$230')}</h4>
            <PrimaryButton text={t('Order now')} />
          </div>
        </div>
      </div>
      <span>
        {t('After selecting the package, you will be redirected to')}{' '}
        <Link to="/builder">{t('The order builder')}</Link> .
      </span>
    </Wrapper>
  );
};

export default Packages;
