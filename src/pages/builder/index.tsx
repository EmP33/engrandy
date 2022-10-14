import React, { useState, useEffect } from 'react';

import { graphql, navigate } from 'gatsby';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Styles
import { Wrapper } from '@/styles/Builder.styles';
import GlobalStyle from '@/styles/Global.styles';
// Components
import Navigation from '@/components/BuilderComponents/Navigation/Navigation';
import Seo from '@/components/seo';
import ConfigurationSection from '@/components/BuilderComponents/ConfigurationSection/ConfigurationSection';
import DetailsDialog from '@/components/BuilderComponents/DetailsDialog/DetailsDialog';
import PrimaryButton from '@/components/Utils/PrimaryButton';
import SummaryDialog from '@/components/BuilderComponents/SummaryDialog/SummaryDialog';
import Preview from '@/components/BuilderComponents/Preview/Preview';
// Icons
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { TbNotes } from 'react-icons/tb';

type Inputs = {
  orderPackage: string | null;
  animations: string | null;
  contactForm: string | null;
  additionalFunctions: string | boolean | null;
};

type Detail = {
  open: boolean;
  detailsSlug: null | string;
};

const prices = {
  orderPackage: [
    { name: 'custom-pack', price: 25 },
    { name: 'landing-page-pack', price: 75 },
    { name: 'business-website-pack', price: 135 },
    { name: 'advanced-website-pack', price: 208 },
  ],
  animations: [
    { name: 'basic-animations', price: 5 },
    { name: 'advanced-animations', price: 25 },
    { name: 'zero-animations', price: 0 },
  ],
  contact: [
    { name: 'no-contact-form', price: 0 },
    { name: 'basic-contact-form', price: 10 },
    { name: 'advanced-contact-form', price: 17 },
    { name: 'add-a-map', price: 5 },
  ],
  additionalFunctions: [
    { name: 'social-media', price: 4 },
    { name: 'additional-page', price: 5 },
    { name: 'loading-screen', price: 10 },
    { name: 'create-custom-elements', price: 10 },
    { name: 'advanced-interactions', price: 10 },
    { name: 'reviews', price: 10 },
    { name: 'cms', price: 25 },
  ],
};

const Builder: React.FC<{ location: any }> = ({ location }) => {
  const [showDetails, setShowDetails] = useState<Detail>({
    open: false,
    detailsSlug: null,
  });
  const [inputs, setInputs] = useState<Inputs>({
    orderPackage: null,
    animations: null,
    contactForm: null,
    additionalFunctions: null,
  });
  const [chosenPack, setChosenPack] = useState<null | string>('');
  const [showSummary, setShowSummary] = useState(false);
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const params = new URLSearchParams(location.search);

  const packPrice = prices?.orderPackage.find(
    (pack) => pack.name === watch('orderPackage'),
  )?.price;
  const animationsPrice = prices?.animations.find(
    (anim) => anim.name === watch('animations'),
  )?.price;
  const contactPrice =
    typeof watch('contactForm') === 'object'
      ? watch('contactForm')
          .map(
            (el: string) =>
              prices?.contact.find((con) => con.name === el)?.price,
          )
          .reduce((acc: number, cur: number) => acc + cur)
      : prices?.contact.find((cont) => cont.name === watch('contactForm'))
          ?.price;
  const additionalFunctionsPrice =
    typeof watch('additionalFunctions') === 'object'
      ? watch('additionalFunctions')?.map(
          (el: string) =>
            prices?.additionalFunctions.find((con) => con.name === el)?.price,
        ).length
        ? watch('additionalFunctions')
            ?.map(
              (el: string) =>
                prices?.additionalFunctions.find((con) => con.name === el)
                  ?.price,
            )
            ?.reduce((acc: number, cur: number) => acc + cur)
        : 0
      : prices?.additionalFunctions.find(
          (cont) => cont.name === watch('additionalFunctions'),
        )?.price || 0;

  const configurationPrice =
    packPrice + animationsPrice + contactPrice + additionalFunctionsPrice;

  const { t } = useTranslation();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const hideShowDetails = () => {
    setShowDetails({ open: false, detailsSlug: null });
  };

  const handleHideSummary = () => {
    setShowSummary(false);
  };

  useEffect(() => {
    AOS.init();

    if (params.get('pack') === 'advanced-website-pack') {
      setInputs({
        orderPackage: 'advanced-website-pack',
        animations: 'basic-animations',
        contactForm: 'advanced-contact-form',
        additionalFunctions: false,
      });
    }
    if (params.get('pack') === 'business-website-pack') {
      setInputs({
        orderPackage: 'business-website-pack',
        animations: 'basic-animations',
        contactForm: 'basic-contact-form',
        additionalFunctions: false,
      });
    }
    if (params.get('pack') === 'landing-page-pack') {
      setInputs({
        orderPackage: 'landing-page-pack',
        animations: 'basic-animations',
        contactForm: 'basic-contact-form',
        additionalFunctions: false,
      });
    }

    setChosenPack(params.get('pack'));
  }, []);

  useEffect(() => {
    if (!watch('orderPackage') || watch('orderPackage') === chosenPack) return;
    setChosenPack(watch('orderPackage'));
    navigate(`/builder/?pack=${watch('orderPackage')}`);
  }, [watch('orderPackage')]);

  if (chosenPack === '') return '';
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Wrapper>
        <section className="preview">
          <Preview
            pack={watch('orderPackage') || inputs.orderPackage}
            animations={watch('animations') || inputs.animations}
            contact={watch('contactForm') || inputs.contactForm}
            functions={
              watch('additionalFunctions') || inputs.additionalFunctions
            }
          />
        </section>
        <article
          className="configuration-section"
          data-aos="fade-left"
          data-aos-delay={400}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <ConfigurationSection
              title={t('Order Packages')}
              sectionID="order-packages"
            >
              <div className="configuration-element">
                <label htmlFor="order-package-4">
                  <input
                    {...register('orderPackage', { required: true })}
                    value="custom-pack"
                    type="radio"
                    id="order-package-4"
                    defaultChecked={!chosenPack || chosenPack === 'custom-pack'}
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">{t('Custom Pack')}</span>
                  <p className="description">
                    {t(
                      'The simplest possible page layout we are able to offer.',
                    )}
                  </p>
                  <span className="price">{t('$25')}</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: location.pathname.includes('pl')
                        ? 'custom-pack-pl'
                        : 'custom-pack',
                    })
                  }
                />
              </div>
              <div className="configuration-element">
                <label htmlFor="order-package-1">
                  <input
                    {...register('orderPackage', { required: true })}
                    value="landing-page-pack"
                    type="radio"
                    id="order-package-1"
                    defaultChecked={chosenPack === 'landing-page-pack'}
                  />
                  <span className="checkmark"></span>
                  <span className="name">{t('Landing Page Pack')}</span>
                  <p className="description">
                    {t(
                      'The perfect option for small businesses or personal websites.',
                    )}
                  </p>
                  <span className="price">{t('$90')}</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: location.pathname.includes('pl')
                        ? 'landing-page-pack-pl'
                        : 'landing-page-pack',
                    })
                  }
                />
              </div>
              <div className="configuration-element">
                <label htmlFor="order-package-2">
                  <input
                    {...register('orderPackage', { required: true })}
                    value="business-website-pack"
                    type="radio"
                    id="order-package-2"
                    defaultChecked={chosenPack === 'business-website-pack'}
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">{t('Business Website Pack')}</span>{' '}
                  <p className="description">
                    {t(
                      'The business package is a great option if you need a more advanced website.',
                    )}
                  </p>
                  <span className="price">{t('$150')}</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: location.pathname.includes('pl')
                        ? 'business-website-pack-pl'
                        : 'business-website-pack',
                    })
                  }
                />
              </div>
              <div className="configuration-element">
                <label htmlFor="order-package-3">
                  <input
                    {...register('orderPackage', { required: true })}
                    value="advanced-website-pack"
                    type="radio"
                    id="order-package-3"
                    defaultChecked={chosenPack === 'advanced-website-pack'}
                  />
                  <span className="checkmark"></span>
                  <span className="name">{t('Advanced Website Pack')}</span>
                  <p className="description">
                    {t(
                      'The advanced package guarantees you the highest quality that we are able to offer.',
                    )}
                  </p>
                  <span className="price">{t('$230')}</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: location.pathname.includes('pl')
                        ? 'advanced-website-pack-pl'
                        : 'advanced-website-pack',
                    })
                  }
                />
              </div>
            </ConfigurationSection>
            <ConfigurationSection
              title={t('Animations')}
              sectionID="animations"
            >
              <div className="configuration-element">
                <label htmlFor="basic-animations">
                  <input
                    type="radio"
                    {...register('animations')}
                    value="basic-animations"
                    id="basic-animations"
                    defaultChecked={chosenPack !== 'custom-pack'}
                  />
                  <span className="checkmark"></span>
                  <span className="name">{t('Basic Animations')}</span>
                  <p className="description">
                    {t('Improve user experience on the site.')}
                  </p>
                  <span className="price">{t('$5')}</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: location.pathname.includes('pl')
                        ? 'basic-animations-pl'
                        : 'basic-animations',
                    })
                  }
                />
              </div>
              <div className="configuration-element">
                <label htmlFor="advanced-animations">
                  <input
                    type="radio"
                    id="advanced-animations"
                    {...register('animations')}
                    value="advanced-animations"
                  />
                  <span className="checkmark"></span>
                  <span className="name">{t('Advanced Animations')}</span>
                  <p className="description">
                    {t(
                      'Definitely improve the user experience on the website.',
                    )}
                  </p>
                  <span className="price">{t('$25')}</span>
                </label>{' '}
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: location.pathname.includes('pl')
                        ? 'advanced-animations-pl'
                        : 'advanced-animations',
                    })
                  }
                />
              </div>

              <label htmlFor="zero-animations">
                <input
                  type="radio"
                  id="zero-animations"
                  {...register('animations')}
                  value="zero-animations"
                  defaultChecked={!chosenPack || chosenPack === 'custom-pack'}
                />
                <span className="checkmark"></span>{' '}
                <span className="name">{t('Zero Animations')}</span>
                <span className="price">{t('$0')}</span>
              </label>
            </ConfigurationSection>
            <ConfigurationSection title={t('Contact Form')} sectionID="contact">
              <label htmlFor="no-contact">
                <input
                  type="radio"
                  {...register('contactForm')}
                  value="no-contact-form"
                  defaultChecked
                  id="no-contact"
                />
                <span className="checkmark"></span>
                <span className="name">{t('No Contact Form')}</span>
                <span className="price">{t('$0')}</span>
              </label>
              <div className="configuration-element">
                <label htmlFor="basic-contact-form">
                  <input
                    type="radio"
                    id="basic-contact-form"
                    {...register('contactForm')}
                    value="basic-contact-form"
                    defaultChecked={chosenPack !== 'custom-pack'}
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">{t('Basic Contact Form')}</span>
                  <p className="description">
                    {t(
                      'The basic contact form ensures correct mailing operation and error handling for the basic form fields.',
                    )}
                  </p>
                  <span className="price">{t('$10')}</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: location.pathname.includes('pl')
                        ? 'basic-contact-form-pl'
                        : 'basic-contact-form',
                    })
                  }
                />
              </div>
              <div className="configuration-element">
                <label htmlFor="advanced-contact-form">
                  <input
                    type="radio"
                    id="advanced-contact-form"
                    {...register('contactForm')}
                    value="advanced-contact-form"
                    defaultChecked={chosenPack === 'advanced-website-pack'}
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">{t('Advanced Contact Form')}</span>
                  <p className="description">
                    {t(
                      'The advanced contact form contains what is basic and can be extended with any elements tailored to your requirements.',
                    )}
                  </p>
                  <span className="price">{t('$17')}</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: location.pathname.includes('pl')
                        ? 'advanced-contact-form-pl'
                        : 'advanced-contact-form',
                    })
                  }
                />
              </div>

              <div className="configuration-element">
                <label htmlFor="add-map">
                  <input
                    type="checkbox"
                    id="add-map"
                    {...register('contactForm')}
                    value="add-a-map"
                  />
                  <span className="checkmark"></span>
                  <span className="name">{t('Adding a Map')}</span>{' '}
                  <p className="description">
                    {t(
                      'Add a map to show the selected point to visitors. It is also a great visual element.',
                    )}
                  </p>
                  <span className="price">{t('$5')}</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: location.pathname.includes('pl')
                        ? 'adding-map-pl'
                        : 'adding-map',
                    })
                  }
                />
              </div>
            </ConfigurationSection>
            <ConfigurationSection
              title={t('Additional functions')}
              sectionID="other-function"
            >
              <div className="configuration-element">
                <label htmlFor="connect-with-social-media">
                  <input
                    type="checkbox"
                    {...register('additionalFunctions')}
                    value="social-media"
                    id="connect-with-social-media"
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">
                    {t('Connection with Social Media')}
                  </span>
                  <p className="description">
                    {t(
                      'Add icons to your social media on various elements of your website to redirect visitors.',
                    )}
                  </p>
                  <span className="price">{t('$4')}</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: location.pathname.includes('pl')
                        ? 'connection-with-social-media-pl'
                        : 'connection-with-social-media',
                    })
                  }
                />
              </div>

              {chosenPack !== 'advanced-website-pack' && (
                <label htmlFor="additional-page">
                  <input
                    type="checkbox"
                    {...register('additionalFunctions')}
                    value="additional-page"
                    id="additional-page"
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">{t('Additional Page')}</span>{' '}
                  <p className="description">
                    {t(
                      'Add another page to your order. Not available for the advanced package.',
                    )}
                  </p>
                  <span className="price">{t('$5')}</span>
                </label>
              )}
              <div className="configuration-element">
                <label htmlFor="loading-screen">
                  <input
                    type="checkbox"
                    {...register('additionalFunctions')}
                    value="loading-screen"
                    id="loading-screen"
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">{t('Loading Screen')}</span>
                  <p className="description">
                    {t(
                      'Add Loading Screen to fulfill time to wait on elements or page loading.',
                    )}
                  </p>
                  <span className="price">{t('$10')}</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: location.pathname.includes('pl')
                        ? 'loading-screen-pl'
                        : 'loading-screen',
                    })
                  }
                />
              </div>
              <div className="configuration-element">
                <label htmlFor="create-custom-elements">
                  <input
                    type="checkbox"
                    {...register('additionalFunctions')}
                    value="create-custom-elements"
                    id="create-custom-elements"
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">
                    {t('Create custom elements/logo/favicon')}
                  </span>
                  <p className="description">
                    {t(
                      "Add elements or pictures created by as if you don't have your own.",
                    )}
                  </p>
                  <span className="price">{t('$10')}</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: location.pathname.includes('pl')
                        ? 'custom-elements-pl'
                        : 'custom-elements',
                    })
                  }
                />
              </div>
              <div className="configuration-element">
                <label htmlFor="advanced-interactions">
                  <input
                    type="checkbox"
                    {...register('additionalFunctions')}
                    value="advanced-interactions"
                    id="advanced-interactions"
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">{t('Advanced Interactions')}</span>
                  <p className="description">
                    {t(
                      'Advanced interactions will add for you site dynamics and certainly visitors will like it.',
                    )}
                  </p>
                  <span className="price">{t('$10')}</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: location.pathname.includes('pl')
                        ? 'advanced-interactions-pl'
                        : 'advanced-interactions',
                    })
                  }
                />
              </div>
              <div className="configuration-element">
                <label htmlFor="review">
                  <input
                    type="checkbox"
                    {...register('additionalFunctions')}
                    value="reviews"
                    id="review"
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">{t('Add reviews')}</span>
                  <p className="description">
                    {t(
                      'Add reviews with chosen by you site to improve credibility of your person or company.',
                    )}
                  </p>
                  <span className="price">{t('$10')}</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: location.pathname.includes('pl')
                        ? 'add-reviews-pl'
                        : 'add-reviews',
                    })
                  }
                />
              </div>
              <div className="configuration-element">
                <label htmlFor="cms">
                  <input
                    type="checkbox"
                    {...register('additionalFunctions')}
                    value="cms"
                    id="cms"
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">CMS</span>
                  <p className="description">
                    {t(
                      'Add possibility to edit content of your website without interaction with code.',
                    )}
                  </p>
                  <span className="price">{t('$25')}</span>
                </label>
              </div>
            </ConfigurationSection>
            <ConfigurationSection
              title={t('Configuration is ready')}
              sectionID="summary"
            >
              <h3>
                {!location.pathname.includes('pl') && '$'}
                {location.pathname.includes('pl')
                  ? isNaN(configurationPrice)
                    ? chosenPack === 'landing-page-pack'
                      ? 90 * 5
                      : chosenPack === 'business-website-pack'
                      ? 150 * 5
                      : chosenPack === 'advanced-website-pack'
                      ? 230 * 5
                      : 25 * 5
                    : configurationPrice * 5
                  : isNaN(configurationPrice)
                  ? chosenPack === 'landing-page-pack'
                    ? 90
                    : chosenPack === 'business-website-pack'
                    ? 150
                    : chosenPack === 'advanced-website-pack'
                    ? 230
                    : 25
                  : configurationPrice}
                {location.pathname.includes('pl') && ' zł'}
              </h3>
              <button
                className="summary-button"
                onClick={() => setShowSummary(true)}
              >
                <TbNotes /> {t('Summary')}
              </button>

              <PrimaryButton
                // link="#"
                text={t('Ask for an offer')}
                type="submit"
              />
            </ConfigurationSection>
          </form>
        </article>
      </Wrapper>
      {showDetails.open && (
        <DetailsDialog
          hideShowDetails={hideShowDetails}
          detailsSlug={showDetails.detailsSlug}
        />
      )}
      {showSummary && (
        <SummaryDialog
          hideSummary={handleHideSummary}
          configuration={{
            pack: watch('orderPackage'),
            animations: watch('animations'),
            contact: watch('contactForm'),
            functions: watch('additionalFunctions'),
          }}
        />
      )}
    </>
  );
};

export const Head = () => {
  return <Seo title="Builder" />;
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

export default Builder;
