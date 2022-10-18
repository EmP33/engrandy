import Layout from '@/components/Layout/layout';
import { Wrapper } from '@/styles/PrivacyPolicy.styles';
import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Seo from '@/components/seo';

const PrivacyPolicy: React.FC<{ location: any }> = ({ location }) => {
  const { t } = useTranslation();
  return (
    <Layout location={location}>
      <Wrapper>
        <h2>{t('Privacy policy')}</h2>
        <p>
          {t(
            'The owner of the engrandy.com website is Engrandy, which is the administrator of your personal data.',
          )}
        </p>{' '}
        <p>
          {t(
            'This Privacy Policy sets out how we process information collected on engrandy.com and explains the reasons why we need to collect certain data about you. Therefore, before using the engrandy.com website, please read this Privacy Policy.',
          )}
        </p>
        <p>
          {t(
            'We take care of your personal data and are committed to ensuring its confidentiality and protection.',
          )}
        </p>
        <h3>{t('Personal data we collect:')}</h3>
        <p>
          {t(
            "When you visit engrandy.com, we automatically collect certain information about your device, including information about your web browser, IP address, time zone and some cookies installed on your device. In addition, while browsing the website, we collect information about individual websites or products that you browse, what pages or phrases entered in the search engine referred you to our Website and how you use it. We refer to this automatically collected information as 'Device Information.' In addition, we may collect the personal information that you provide to us (including, but not limited to, your name, address, payment information, etc.) at the registration stage to enable the performance of a contract. Why do we process your data? Our overriding priority is to ensure the security of customer / user data, therefore we can only process limited data to the extent that it is absolutely necessary to maintain the functioning of the Website. The information collected automatically is used only to identify potential fraud cases and to compile statistical data on the use of our website. The aforementioned statistical data is not collected in a way that enables the identification of a specific system user.",
          )}
        </p>
        <p>
          {t(
            "You can visit our Website without disclosing your identity to us or providing any information that could identify you as a specific, identifiable person. However, if you want to use certain functions of the Website, or you want to receive our newsletter, or provide other information by filling in the form, you can provide us with your personal data, such as e-mail address, name, surname, city where you live, company, organization, Phone number. You can opt out of providing your personal information to us, but then you may not be able to use some of the Site's features. For example, we will not be able to send you our Newsletter or contact you directly on the Site. Users who are not sure which information is mandatory can contact us at help.engrandy@gmail.com.",
          )}
        </p>
        <h3>{t('Your rights:')}</h3>
        <p>
          {t(
            'If you are a citizen of the European Union, you have the following rights regarding your personal data:',
          )}
        </p>
        <ul>
          <li>{t('Right to be informed.')}</li>
          <li>{t('Right to access information.')}</li>
          <li>{t('The right to correct data.')}.</li>
          <li>{t('The right to delete data.')}</li>
          <li>{t('Right to restriction of data processing.')}</li>
          <li>{t('The right to restrict the method of data processing.')}</li>
          <li>{t('Right to object.')}</li>
          <li>
            {t(
              'Rights relating to the automation of decision-making and profiling.',
            )}
          </li>
        </ul>
        <p>
          {t(
            'If you wish to exercise this right, please contact us via the contact details below.',
          )}
        </p>
        <p>
          {t(
            'In addition, if you are a citizen of the European Union, we point out that your data may be processed for the performance of any contracts concluded with you (e.g. when placing an order through the Site) or for the performance of our legitimate business activities listed above. In addition, please note that your information may be transferred outside the European Union, including to Canada and the United States. Links to Other Sites Our Site may contain links to other sites that are not owned or controlled by us. Please be advised that we are not responsible for other websites or their privacy practices. For this reason, we encourage you to consciously leave our website and read the privacy policy of each website that may collect personal data.',
          )}
        </p>
        <h3>{t('Data protection:')}</h3>
        <p>
          {t(
            'We ensure the security of information provided by the user on computer servers in a controlled, secure environment, protected against unauthorized access, use or disclosure. As part of control and supervision, we use appropriate administrative, technical and physical safeguards to protect against unauthorized access, use, modification and disclosure of personal data. However, we cannot guarantee the security of data transmission over the internet or wireless network.',
          )}
        </p>
        <h3>
          {t('Disclosure of information resulting from legal provisions:')}
        </h3>
        <p>
          {t(
            'Any information we collect, use or receive will be disclosed when required or lawful, for example to comply with a subpoena or similar legal process, and where we have a good faith belief that disclosure is necessary to protect our rights, your safety or the safety of others, to detect fraud or in response to requests from governmental authorities.',
          )}
        </p>
        <h3>{t('Contact info:')}</h3>
        <p>
          {t(
            'If you wish to contact us for more information on this Privacy Policy or in any matter relating to your rights and personal data, you can send an e-mail to help.engrandy@gmail.com.',
          )}
        </p>
      </Wrapper>
    </Layout>
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

export default PrivacyPolicy;
