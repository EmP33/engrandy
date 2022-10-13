import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { useForm } from 'react-hook-form';
// Assets
import SendMessage from '@/assets/SendMessage';
// Styles
import { Wrapper } from '@/styles/Contact.styles';
// Components
import Layout from '@/components/Layout/layout';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Seo from '@/components/seo';
import PrimaryButton from '@/components/Utils/PrimaryButton';
import SuccessScreen from '@/components/SuccessScreen/SuccessScreen';

type Inputs = {
  message: string;
  name: string;
  email: string;
};

const Contact: React.FC<{ location: any }> = ({ location }) => {
  const [showNotification, setShowNotification] = useState(false);
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    setShowNotification(true);
  };

  const hideNotification = () => {
    setShowNotification(false);
  };

  return (
    <Layout location={location}>
      <Wrapper>
        <Breadcrumb
          currentPage={t('Contact')}
          link="/"
          previousPage={t('Home')}
        />
        <h2 data-aos="fade-up">
          {t('Do you have additional questions? You can ask them here!')}
        </h2>
        <div
          className="content-wrapper"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <SendMessage />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder={`${t('First name')}*`}
              {...register('name', { required: true })}
            />
            {errors.name && (
              <span role="alert">{t('Name input cannot be blank.')}</span>
            )}
            <input
              type="email"
              placeholder={`${t('Email Address')}*`}
              {...register('email', {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              })}
            />
            {errors.email && (
              <span role="alert">{t('Enter correct email address.')}</span>
            )}
            <textarea
              rows={4}
              placeholder={`${t('Message')}*`}
              {...register('message', { required: true })}
            />
            {errors.message && (
              <span role="alert">{t('Message field cannot be blank.')}</span>
            )}
            <PrimaryButton type="submit" text={t('Send')} />
          </form>
        </div>
      </Wrapper>
      {showNotification && (
        <SuccessScreen hideNotification={hideNotification} />
      )}
    </Layout>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Contact" />;

export default Contact;
