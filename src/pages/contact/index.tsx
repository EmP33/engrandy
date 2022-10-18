import React, { useState, useRef } from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
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
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const form = useRef();
  const [showNotification, setShowNotification] = useState(false);
  const [pause, setPause] = useState(false);
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    setPause(true);
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        form.current,
        process.env.API_KEY,
      )
      .then(
        (result: any) => {
          setFormState({
            name: '',
            email: '',
            message: '',
          });
          setPause(false);
          setShowNotification(true);
        },
        (error: any) => {
          setPause(false);
        },
      );
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
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder={`${t('First name')}*`}
              {...register('name', { required: true })}
              value={formState.name}
              onChange={(e: React.ChangeEvent) => {
                setFormState((prev) => ({
                  name: e.target.value,
                  email: prev.email,
                  message: prev.message,
                }));
              }}
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
              value={formState.email}
              onChange={(e: React.ChangeEvent) => {
                setFormState((prev) => ({
                  name: prev.name,
                  email: e.target.value,
                  message: prev.message,
                }));
              }}
            />
            {errors.email && (
              <span role="alert">{t('Enter correct email address.')}</span>
            )}
            <textarea
              rows={4}
              placeholder={`${t('Message')}*`}
              {...register('message', { required: true })}
              value={formState.message}
              onChange={(e: React.ChangeEvent) => {
                setFormState((prev) => ({
                  name: prev.name,
                  email: prev.email,
                  message: e.target.value,
                }));
              }}
            />
            {errors.message && (
              <span role="alert">{t('Message field cannot be blank.')}</span>
            )}
            <PrimaryButton disabled={pause} type="submit" text={t('Send')} />
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

export const Head = () => <Seo />;

export default Contact;
