import React, { useState, useEffect } from 'react';
import { Wrapper } from '@/styles/Builder.styles';
import { graphql } from 'gatsby';
import GlobalStyle from '@/styles/Global.styles';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Components
import Navigation from '@/components/BuilderComponents/Navigation/Navigation';
import Seo from '@/components/seo';
import ConfigurationSection from '@/components/BuilderComponents/ConfigurationSection/ConfigurationSection';
import DetailsDialog from '@/components/BuilderComponents/DetailsDialog/DetailsDialog';
import PrimaryButton from '@/components/Utils/PrimaryButton';
// Icons
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { TbNotes } from 'react-icons/tb';
import Preview from '@/components/BuilderComponents/Preview/Preview';

const Builder = () => {
  const [showDetails, setShowDetails] = useState<{
    open: boolean;
    detailsSlug: null | string;
  }>({
    open: false,
    detailsSlug: null,
  });

  const hideShowDetails = () => {
    setShowDetails({ open: false, detailsSlug: null });
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Wrapper>
        <section className="preview">
          <Preview />
        </section>
        <article
          className="configuration-section"
          data-aos="fade-left"
          data-aos-delay={400}
        >
          <form>
            <ConfigurationSection
              title="Order Packages"
              sectionID="order-packages"
            >
              <div className="configuration-element">
                <label htmlFor="order-package-4">
                  <input
                    type="radio"
                    name="order-package"
                    id="order-package-4"
                    defaultChecked
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">Custom Pack </span>
                  <p className="description">
                    Najprostszy możliwy schemat strony jaki jesteśmy w stanie
                    zaoferować.
                  </p>
                  <span className="price">$25</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: 'custom-pack',
                    })
                  }
                />
              </div>
              <div className="configuration-element">
                <label htmlFor="order-package-1">
                  <input
                    type="radio"
                    name="order-package"
                    id="order-package-1"
                  />
                  <span className="checkmark"></span>
                  <span className="name">Landing Page Pack </span>
                  <p className="description">
                    Idealną opcją dla małych biznesów lub stron personalnych.
                  </p>
                  <span className="price">$90</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: 'landing-page-pack',
                    })
                  }
                />
              </div>
              <div className="configuration-element">
                <label htmlFor="order-package-2">
                  <input
                    type="radio"
                    name="order-package"
                    id="order-package-2"
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">Business Website Pack </span>{' '}
                  <p className="description">
                    Pakiet business jest to świetna opcja jeżeli potrzebujesz
                    bardziej zaawansowanej strony.
                  </p>
                  <span className="price">$150</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: 'business-website-pack',
                    })
                  }
                />
              </div>
              <div className="configuration-element">
                {' '}
                <label htmlFor="order-package-3">
                  <input
                    type="radio"
                    name="order-package"
                    id="order-package-3"
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">Advanced Website Pack </span>{' '}
                  <p className="description">
                    Pakiet zaawansowany gwarantuje Ci najwyższą jakość jaką
                    jesteśmy w stanie zaoferować.
                  </p>
                  <span className="price">$230</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: 'advanced-website-pack',
                    })
                  }
                />
              </div>
            </ConfigurationSection>
            <ConfigurationSection title="Animations" sectionID="animations">
              <div className="configuration-element">
                <label htmlFor="basic-animations">
                  <input type="radio" name="animations" id="basic-animations" />
                  <span className="checkmark"></span>
                  <span className="name">Basic Animations</span>
                  <p className="description">
                    Polepsz doświadczenia użytkowników na stronie.
                  </p>
                  <span className="price">$5</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: 'basic-animations',
                    })
                  }
                />
              </div>
              <div className="configuration-element">
                <label htmlFor="advanced-animations">
                  <input
                    type="radio"
                    name="animations"
                    id="advanced-animations"
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">Advanced Animations</span>
                  <p className="description">
                    Zdecydowanie polepsz doświadczenia użytkowników na stronie.
                  </p>
                  <span className="price">$25</span>
                </label>{' '}
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: 'advanced-animations',
                    })
                  }
                />
              </div>

              <label htmlFor="zero-animations">
                <input type="radio" name="animations" id="zero-animations" />
                <span className="checkmark"></span>{' '}
                <span className="name">Zero animations</span>
                <span className="price">$0</span>
              </label>
            </ConfigurationSection>
            <ConfigurationSection title="Contact Form" sectionID="contact">
              <label htmlFor="no-contact">
                <input type="radio" name="contact-form" id="no-contact" />
                <span className="checkmark"></span>
                <span className="name">No Contact Form</span>
                <span className="price">$0</span>
              </label>
              <div className="configuration-element">
                <label htmlFor="basic-contact-form">
                  <input
                    type="radio"
                    name="contact-form"
                    id="basic-contact-form"
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">Basic Contact Form</span>
                  <p className="description">
                    Podstawowy formularz kontaktowy zapewnia poprawne działanie
                    mailingu oraz obsługę błedów dla podstawowych pól
                    formularza.
                  </p>
                  <span className="price">$10</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: 'basic-contact-form',
                    })
                  }
                />
              </div>

              <label htmlFor="advanced-contact-form">
                <input
                  type="radio"
                  name="contact-form"
                  id="advanced-contact-form"
                />
                <span className="checkmark"></span>{' '}
                <span className="name">Advanced Contact Form</span>
                <p className="description">
                  Zaawansowany formularz kontaktowy zawiera to co podstawowy
                  oraz może być rozszerzony o dowolne elementy dostosowane pod
                  twoje wymagania.
                </p>
                <span className="price">$17</span>
              </label>
              <div className="configuration-element">
                <label htmlFor="add-map">
                  <input type="checkbox" name="contact-form" id="add-map" />
                  <span className="checkmark"></span>
                  <span className="name">Adding a Map </span>{' '}
                  <p className="description">
                    Dodaj mapę, aby pokazać dla odwiedzających wybrany punkt.
                    Jest to też świetny element wizualny.
                  </p>
                  <span className="price">$5</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: 'adding-map',
                    })
                  }
                />
              </div>
            </ConfigurationSection>
            <ConfigurationSection
              title="Additional functions"
              sectionID="other-function"
            >
              <div className="configuration-element">
                <label htmlFor="connect-with-social-media">
                  <input
                    type="checkbox"
                    name="additional-functions"
                    id="connect-with-social-media"
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">Connection with Social Media </span>
                  <p className="description">
                    Dodaj ikonki do twoich social media w różnych elementach
                    twojej strony, aby przekierowywać odwiedzających Twoją
                    stronę.
                  </p>
                  <span className="price">$4</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: 'connection-with-social-media',
                    })
                  }
                />
              </div>

              <label htmlFor="additional-page">
                <input
                  type="checkbox"
                  name="additional-functions"
                  id="additional-page"
                />
                <span className="checkmark"></span>{' '}
                <span className="name">Additional Page</span>{' '}
                <p className="description">
                  Dodaj kolejną stronę do zamówienia. Niedostępne dla pakietu
                  zaawansowanego.
                </p>
                <span className="price">$5</span>
              </label>
              <div className="configuration-element">
                <label htmlFor="loading-screen">
                  <input
                    type="checkbox"
                    name="additional-functions"
                    id="loading-screen"
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">Loading Screen</span>
                  <p className="description">
                    Dodaj ekrany ładowania, aby wypełnić czymś czas oczekiwania
                    na załadowanie się strony lub elementów.
                  </p>
                  <span className="price">$10</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: 'loading-screen',
                    })
                  }
                />
              </div>
              <div className="configuration-element">
                <label htmlFor="create-custom-elements">
                  <input
                    type="checkbox"
                    name="additional-functions"
                    id="create-custom-elements"
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">
                    Create custom elements/logo/favicon{' '}
                  </span>
                  <p className="description">
                    Dodaj stworzone przez nas elementy lub obrazki, jeżeli nie
                    masz własnych.
                  </p>
                  <span className="price">$10</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: 'custom-elements',
                    })
                  }
                />
              </div>
              <div className="configuration-element">
                <label htmlFor="adavanced-interactions">
                  <input
                    type="checkbox"
                    name="additional-functions"
                    id="adavanced-interactions"
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">Advanced Interactions</span>
                  <p className="description">
                    Zaawansowane interakcje dodadzą dla twojej strony
                    dynamiczności i z pewnością odwiedzający twoją stronę
                    polubią to.
                  </p>
                  <span className="price">$10</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: 'advanced-interactions',
                    })
                  }
                />
              </div>
              <div className="configuration-element">
                <label htmlFor="review">
                  <input
                    type="checkbox"
                    name="additional-functions"
                    id="review"
                  />
                  <span className="checkmark"></span>{' '}
                  <span className="name">Add reviews</span>
                  <p className="description">
                    Dodaj recenzje z wybranej przez Ciebie strony, aby zwiększyć
                    wiarygodność twojej osoby/firmy.
                  </p>
                  <span className="price">$10</span>
                </label>
                <IoIosInformationCircleOutline
                  onClick={() =>
                    setShowDetails({
                      open: true,
                      detailsSlug: 'add-reviews',
                    })
                  }
                />
              </div>
              <div className="configuration-element">
                <label htmlFor="cms">
                  <input type="checkbox" name="additional-functions" id="cms" />
                  <span className="checkmark"></span>{' '}
                  <span className="name">CMS</span>
                  <p className="description">
                    Dodaj możliwość edytowania treści strony bez interakcji z
                    kodem.
                  </p>
                  <span className="price">$25</span>
                </label>
              </div>
            </ConfigurationSection>
            <ConfigurationSection
              title="Configuration is ready"
              sectionID="summary"
            >
              <h3>$94</h3>
              <button className="summary-button">
                <TbNotes /> Podsumowanie
              </button>
              <PrimaryButton text="Zapytaj o ofertę" type="submit" />
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
