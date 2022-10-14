import PrimaryButton from '../../Utils/PrimaryButton';
import { Wrapper } from './Notification.styles';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Notification = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="content-wrapper">
        <h2>{t('Do you have additional questions')}</h2>
        <PrimaryButton link="/faq/" dark text="FAQ" />
      </div>
    </Wrapper>
  );
};

export default Notification;
