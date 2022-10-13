import React from 'react';
import { Wrapper, Contact, Reviews } from './Preview.styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import Cat from '@/assets/Cat';
import { StaticImage } from 'gatsby-plugin-image';

interface IProps {
  pack: string;
  animations: string;
  contact: string[] | string;
  functions: string[] | string;
}

const Preview: React.FC<IProps> = ({
  pack,
  animations,
  contact,
  functions,
}) => {
  console.log({ pack, animations, contact, functions });

  return (
    <Wrapper className="custom-pack" data-aos="fade-in">
      <div className="navigation">
        <span>
          {functions && functions.includes('create-custom-elements') ? (
            <StaticImage
              alt="custom logo"
              src="../../../assets/images/builder/CUSTOM.webp"
            />
          ) : pack === 'custom-pack' ? (
            'custom'
          ) : pack === 'landing-page-pack' ? (
            'landing'
          ) : pack === 'business-website-pack' ? (
            'business'
          ) : (
            'advanced'
          )}
        </span>
        {(pack === 'business-website-pack' ||
          pack === 'advanced-website-pack') && (
          <nav>
            <span>Page</span>
            <span>Page</span>
            <span>Page</span>
          </nav>
        )}
        <GiHamburgerMenu />
      </div>
      <div className="hero">
        {pack !== 'custom-pack' && (
          <div className="hero-slides-buttons">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        <div className="hero__content">
          {functions && functions.includes('create-custom-elements') && (
            <StaticImage
              alt="custom logo"
              src="../../../assets/images/builder/CUSTOM.webp"
            />
          )}
          <div className="heading"></div>
          <div className="subheading"></div>
        </div>
        <Cat />
      </div>
      <section className="section section--1">
        <h2>SECTION - 1</h2>
      </section>
      <section className="section section--2">
        <h2>SECTION - 2</h2>
      </section>
      {functions && functions.includes('reviews') && (
        <Reviews>
          <span>Reviews</span>
          <div className="reviews">
            <div className="review">
              <div className="review-img"></div>
              <div className="review-heading"></div>
            </div>
            <div className="review">
              <div className="review-img"></div>
              <div className="review-heading"></div>
            </div>
            <div className="review">
              <div className="review-img"></div>
              <div className="review-heading"></div>
            </div>
          </div>
        </Reviews>
      )}
      <section className="section section--3">
        <h2>SECTION - 3</h2>
      </section>
      {typeof contact === 'object' ? (
        contact.includes('no-contact-form') &&
        !contact.includes('add-a-map') ? (
          ''
        ) : (
          <Contact
            isMap={contact.includes('add-a-map')}
            advanced={contact.includes('advanced-contact-form')}
          >
            {contact.includes('add-a-map') && (
              <div className="contact-map">MAP</div>
            )}
            {!contact.includes('no-contact-form') && (
              <div className="contact-form">
                <div className="contact-form__heading">
                  {contact.includes('advanced-contact-form')
                    ? 'Advanced Contact'
                    : 'Basic Contact'}
                  {functions && functions.includes('social-media') && (
                    <div className="socials">
                      <BsFacebook />
                      <AiFillInstagram />
                      <BsTwitter />
                      <BsYoutube />
                    </div>
                  )}
                </div>

                <div className="contact-form__input"></div>
                <div className="contact-form__input"></div>
                <div className="contact-form__input"></div>
                <div className="contact-form__button"></div>
              </div>
            )}
          </Contact>
        )
      ) : contact === 'no-contact-form' || !contact ? (
        ''
      ) : (
        <Contact
          advanced={contact === 'advanced-contact-form'}
          isMap={contact.includes('add-a-map')}
        >
          <div className="contact-map">MAP</div>
          <div className="contact-form">
            <div className="contact-form__heading">
              {contact.includes('advanced-contact-form')
                ? 'Advanced Contact'
                : 'Basic Contact'}
              {functions && functions.includes('social-media') && (
                <div className="socials">
                  <BsFacebook />
                  <AiFillInstagram />
                  <BsTwitter />
                  <BsYoutube />
                </div>
              )}
            </div>
            <div className="contact-form__input"></div>
            <div className="contact-form__input"></div>
            <div className="contact-form__input"></div>
            <div className="contact-form__button"></div>
          </div>
        </Contact>
      )}
      <footer>
        <span>{pack || 'custom-pack'}</span>
        {functions && functions.includes('social-media') && (
          <div className="socials">
            <BsFacebook />
            <AiFillInstagram />
            <BsTwitter />
            <BsYoutube />
          </div>
        )}
        <span>&copy; 2022 Copyrights</span>
      </footer>
    </Wrapper>
  );
};

export default Preview;
