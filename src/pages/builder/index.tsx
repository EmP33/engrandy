import React, { useState } from 'react';
import { Wrapper } from '@/styles/Builder.styles';
import { graphql } from 'gatsby';
// Components
import Navigation from '@/components/BuilderComponents/Navigation/Navigation';
import Seo from '@/components/seo';
import ConfigurationSection from '@/components/BuilderComponents/ConfigurationSection/ConfigurationSection';
import DetailsDialog from '@/components/BuilderComponents/DetailsDialog/DetailsDialog';
import PrimaryButton from '@/components/Utils/PrimaryButton';
// Icons
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { MdWebAsset } from 'react-icons/md';
import { TbNotes } from 'react-icons/tb';

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

  console.log(showDetails);

  return (
    <>
      <Navigation />
      <Wrapper>
        <section className="preview">
          <MdWebAsset />
        </section>
        <article className="configuration-section">
          <form>
            <ConfigurationSection
              title="Order Packages"
              sectionID="order-packages"
            >
              <label htmlFor="order-package-1">
                <input type="radio" name="order-package" id="order-package-1" />
                <span className="checkmark"></span>
                <span className="name">
                  Basic Package{' '}
                  <IoIosInformationCircleOutline
                    onClick={() =>
                      setShowDetails({
                        open: true,
                        detailsSlug: 'basic-package',
                      })
                    }
                  />
                </span>
                <span className="price">$90</span>
              </label>
              <label htmlFor="order-package-2">
                <input type="radio" name="order-package" id="order-package-2" />
                <span className="checkmark"></span>{' '}
                <span className="name">
                  Advanced Package{' '}
                  <IoIosInformationCircleOutline
                    onClick={() =>
                      setShowDetails({
                        open: true,
                        detailsSlug: 'advanced-package',
                      })
                    }
                  />
                </span>
                <span className="price">$150</span>
              </label>
              <label htmlFor="order-package-3">
                <input type="radio" name="order-package" id="order-package-3" />
                <span className="checkmark"></span>{' '}
                <span className="name">
                  Expert Package{' '}
                  <IoIosInformationCircleOutline
                    onClick={() =>
                      setShowDetails({
                        open: true,
                        detailsSlug: 'expert-package',
                      })
                    }
                  />
                </span>
                <span className="price">$230</span>
              </label>
              <label htmlFor="order-package-4">
                <input type="radio" name="order-package" id="order-package-4" />
                <span className="checkmark"></span>{' '}
                <span className="name">No one</span>
                <span className="price">$0</span>
              </label>
            </ConfigurationSection>
            <ConfigurationSection title="Animations" sectionID="animations">
              <label htmlFor="order-package-1">
                <input type="radio" name="order-package" id="order-package-1" />
                <span className="checkmark"></span>
                <span className="name">Basic Package</span>
                <span className="price">$90</span>
              </label>
              <label htmlFor="order-package-2">
                <input type="radio" name="order-package" id="order-package-2" />
                <span className="checkmark"></span>{' '}
                <span className="name">Advanced Package</span>
                <span className="price">$150</span>
              </label>
              <label htmlFor="order-package-3">
                <input type="radio" name="order-package" id="order-package-3" />
                <span className="checkmark"></span>{' '}
                <span className="name">Expert Package</span>
                <span className="price">$230</span>
              </label>
            </ConfigurationSection>
            <ConfigurationSection
              title="Additional functions"
              sectionID="additional-functions"
            >
              <label htmlFor="order-package-1">
                <input type="radio" name="order-package" id="order-package-1" />
                <span className="checkmark"></span>
                <span className="name">Basic Package</span>
                <span className="price">$90</span>
              </label>
              <label htmlFor="order-package-2">
                <input type="radio" name="order-package" id="order-package-2" />
                <span className="checkmark"></span>{' '}
                <span className="name">Advanced Package</span>
                <span className="price">$150</span>
              </label>
              <label htmlFor="order-package-3">
                <input type="radio" name="order-package" id="order-package-3" />
                <span className="checkmark"></span>{' '}
                <span className="name">Expert Package</span>
                <span className="price">$230</span>
              </label>
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
