import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Layout from '@/components/Layout/layout';
import PageHeading from '@/components/PageHeading/PageHeading';
import QuestionBlock from '@/components/QuestionBlock/QuestionBlock';
import Seo from '@/components/seo';
import { Wrapper } from '@/styles/FAQ.styles';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

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

const FAQ = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Wrapper>
        <div className="content-wrapper">
          <Breadcrumb
            currentPage={t('FAQ')}
            previousPage={t('Home')}
            link="/"
          />
          <PageHeading subheading="FAQ" heading="Asked questions" />
          <div className="questions">
            {questions.map(({ id, question, answer }) => (
              <QuestionBlock key={id} question={question} answer={answer} />
            ))}
          </div>
        </div>
      </Wrapper>
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

export const Head = () => <Seo title="FAQ" />;

export default FAQ;
