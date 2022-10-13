import PrimaryButton from '../../Utils/PrimaryButton';
import { Wrapper } from './Notification.styles';
import { useTranslation, Link } from 'gatsby-plugin-react-i18next';

const Notification = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="content-wrapper">
        <h2>{t('Do you have additional questions')}</h2>
        <Link to="/faq/">
          <PrimaryButton link="/faq/" dark text="FAQ" />
        </Link>
      </div>
    </Wrapper>
  );
};

export default Notification;
