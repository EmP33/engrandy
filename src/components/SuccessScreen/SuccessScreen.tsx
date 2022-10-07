import React from 'react';
import { Wrapper } from './SuccessScreen.styles';
import { FaPaperPlane } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { useTranslation } from 'gatsby-plugin-react-i18next';

interface IProps {
  hideNotification: () => void;
}

const SuccessScreen: React.FC<IProps> = ({ hideNotification }) => {
  const { t } = useTranslation();
  return (
    <Wrapper onClick={hideNotification}>
      <div className="message-box" data-aos="fade-up">
        <IoIosClose />
        <FaPaperPlane />
        <span>{t('Your message has been sent')}</span>
      </div>
    </Wrapper>
  );
};

export default SuccessScreen;
