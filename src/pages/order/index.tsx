import { useState, useEffect } from 'react';
import { Wrapper } from '@/styles/Order.styles';
import GlobalStyle from '@/styles/Global.styles';
import { graphql, navigate } from 'gatsby';
import { useForm } from 'react-hook-form';
import { IoCloseSharp } from 'react-icons/io5';
import Preview from '@/components/BuilderComponents/Preview/Preview';
import Seo from '@/components/seo';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import PrimaryButton from '@/components/Utils/PrimaryButton';
import OrderPreview from '@/components/BuilderComponents/SummaryDialog/OrderPreview';
import QuestionBlock from '@/components/QuestionBlock/QuestionBlock';

interface IConfiguration {
  additionalFunctions: string[];
  animations: string;
  orderPackage: string;
  contactForm: string | string[];
  totalAmount: number;
}

export interface IQuestion {
  id: number;
  question: string;
  answer: string;
}

const questions: IQuestion[] = [
  {
    id: 0,
    question: 'How much will my project cost?',
    answer:
      'It depends on what you actually want. We offer 3 basic packages that you can choose as well as customize your own order in our order builder.',
  },
  {
    id: 1,
    question: 'How long will I wait for the project to start?',
    answer:
      'In each summary, we can tell you how long it will take to create this website from start to finish, not counting the time to create a visual design and receive information from you.',
  },
  {
    id: 2,
    question: 'Which technologies do you use?',
    answer:
      'We work with the use of well-known and modern technologies such as React.JS, Gatsby, Firebase.',
  },
];

const Order = ({ location }) => {
  const { t } = useTranslation();
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
    setShowNotification(true);
  };

  const {
    orderPackage,
    animations,
    contactForm,
    additionalFunctions,
    totalAmount,
  } = configurationState;
  console.log(orderPackage, totalAmount);
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
          <h3>
            {t(orderPackage)}: {!location.pathname.includes('pl') && '$'}
            <span>
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
          </h3>
          <div className="summary-details" data-aos="slide-up">
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
        </section>
      </main>
    </Wrapper>
  );
};

export const Head = () => <Seo title="Order" />;

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
