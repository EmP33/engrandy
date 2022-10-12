import React from 'react';
import { Wrapper } from './Preview.styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsMouse } from 'react-icons/bs';
import Cat from '@/assets/Cat';

const Preview = () => {
  return (
    <Wrapper className="custom-pack" data-aos="fade-in">
      <div className="navigation">
        <span>Custom</span>
        <GiHamburgerMenu />
      </div>
      <div className="hero">
        <div className="hero__content">
          <div className="heading"></div>
          <div className="subheading"></div>
        </div>
        <Cat />
        <BsMouse />
      </div>
      <section className="section section--1">
        <h2>SECTION - 1</h2>
      </section>
      <section className="section section--2">
        <h2>SECTION - 2</h2>
      </section>
      <section className="section section--3">
        <h2>SECTION - 3</h2>
      </section>
      <footer>
        <span>Custom</span>
        <span>&copy; 2022 Copyrights</span>
      </footer>
    </Wrapper>
  );
};

export default Preview;
