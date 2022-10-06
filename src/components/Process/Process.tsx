import { Wrapper } from './Process.styles';
import { useTranslation } from 'gatsby-plugin-react-i18next';
// Icons
import { MdPayments } from 'react-icons/md';
import { TbWriting } from 'react-icons/tb';
import { RiSlideshowLine } from 'react-icons/ri';

const Process = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="content-wrapper">
        <h2>{t('What does the process of creating a website look like')}</h2>
        <div className="process-steps">
          <div className="process-steps__step" data-number={1}>
            <MdPayments />
            <h3>{t('You order and pay for the service')}</h3>
            <p>
              {t(
                'To order the service, you can do it on this page using the available packages or use the order builder. You can also use websites offering such services by finding our offer there',
              )}
            </p>
          </div>
          <div className="process-steps__step" data-number={2}>
            <TbWriting />
            <h3>{t('Information gathering')}</h3>
            <p>
              {t(
                'We will collect from you all the information we need to provide you with a high-class product, so that you are satisfied with the service. You will have to upload photos, videos and texts to the site or you will have to rely on us',
              )}
            </p>
          </div>
          <div className="process-steps__step" data-number={3}>
            <RiSlideshowLine />
            <h3>{t('Delivery of the order')}</h3>
            <p>
              {t(
                'On predetermined working days, we will provide you with a new and professional website. You will then be able to submit your comments and we will improve the website for free',
              )}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Process;
