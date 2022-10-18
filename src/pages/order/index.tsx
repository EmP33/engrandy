import React, { useState, useEffect, useRef } from 'react';
import { Wrapper } from '@/styles/Order.styles';
import GlobalStyle from '@/styles/Global.styles';
import { graphql, navigate } from 'gatsby';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { IoCloseSharp } from 'react-icons/io5';
import Preview from '@/components/BuilderComponents/Preview/Preview';
import Seo from '@/components/seo';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PrimaryButton from '@/components/Utils/PrimaryButton';
import OrderPreview from '@/components/BuilderComponents/SummaryDialog/OrderPreview';
import QuestionBlock from '@/components/QuestionBlock/QuestionBlock';
import SuccessScreen from '@/components/SuccessScreen/SuccessScreen';

interface IConfiguration {
  additionalFunctions: string[];
  animations: string;
  orderPackage: string;
  contactForm: string | string[];
  totalAmount: number;
}

type Inputs = {
  message: string;
  name: string;
  email: string;
};

const Order = ({ location }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const form = useRef();
  const { t } = useTranslation();
  const [showNotification, setShowNotification] = useState(false);
  const [pause, setPause] = useState(false);
  const [configurationState, setConfigurationState] = useState<IConfiguration>({
    additionalFunctions: [],
    animations: '',
    orderPackage: '',
    contactForm: [],
    totalAmount: 0,
  });

  useEffect(() => {
    setConfigurationState(JSON.parse(localStorage.getItem('configuration')));
  }, []);
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
    navigate('/', { replace: true });
  };

  const {
    orderPackage,
    animations,
    contactForm,
    additionalFunctions,
    totalAmount,
  } = configurationState;

  return (
    <Wrapper>
      <GlobalStyle />
      <main className="content">
        <IoCloseSharp onClick={() => navigate(-1)} />
        <section className="preview">
          <Preview
            type="order-type"
            pack={orderPackage}
            animations={animations}
            contact={contactForm}
            functions={additionalFunctions}
          />
        </section>
        <section className="summary">
          <div className="summary-heading">
            <h3>
              {t(orderPackage)}:{' '}
              <span>
                {!location.pathname.includes('pl') && '$'}
                {location.pathname.includes('pl')
                  ? !totalAmount
                    ? orderPackage === 'landing-page-pack'
                      ? 90 * 5
                      : orderPackage === 'business-website-pack'
                      ? 150 * 5
                      : orderPackage === 'advanced-website-pack'
                      ? 230 * 5
                      : 25 * 5
                    : totalAmount * 5
                  : !totalAmount
                  ? orderPackage === 'landing-page-pack'
                    ? 90
                    : orderPackage === 'business-website-pack'
                    ? 150
                    : orderPackage === 'advanced-website-pack'
                    ? 230
                    : 25
                  : totalAmount}
                {location.pathname.includes('pl') && ' zł'}
              </span>
            </h3>{' '}
            <span>
              {additionalFunctions && additionalFunctions?.length > 0
                ? '>'
                : ''}
              {orderPackage === 'landing-page-pack'
                ? 3
                : orderPackage === 'business-website-pack'
                ? 5
                : orderPackage === 'advanced-website-pack'
                ? 10
                : 1}{' '}
              {orderPackage === 'custom-pack' ? t('Day') : t('Days')}
            </span>
          </div>
          <div className="summary-details">
            <QuestionBlock
              question={t('Selected package')}
              answer={orderPackage}
            />
            <QuestionBlock
              question={t('Selected animations')}
              answer={t(animations)}
            />
            <QuestionBlock
              question={t('Contact form and map')}
              answer={
                typeof contactForm === 'object'
                  ? contactForm.map((el) => t(el)).join(', ')
                  : t(contactForm)
              }
            />
            <QuestionBlock
              question={t('Additional Features')}
              answer={
                additionalFunctions && additionalFunctions?.length !== 0
                  ? typeof additionalFunctions === 'object'
                    ? additionalFunctions.map((el) => t(el)).join(', ')
                    : t(additionalFunctions)
                  : t('No additional functions selected')
              }
            />
          </div>
          <OrderPreview pack={orderPackage} />
          <h3>{t('Ask for an offer')}</h3>
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
            )}{' '}
            <input
              type="text"
              name="order"
              id="orderField"
              value={JSON.stringify(configurationState)}
              readOnly
            />
            <PrimaryButton disabled={pause} type="submit" text={t('Send')} />
          </form>
        </section>
      </main>

      {showNotification && (
        <SuccessScreen
          hideNotification={hideNotification}
          type="orderNotification"
        />
      )}
    </Wrapper>
  );
};

export const Head = () => <Seo />;

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

export default Order;
