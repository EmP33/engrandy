import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  min-height: 88vh;
  position: relative;
  background: #f3fff9;
  z-index: 1;
  -webkit-box-shadow: inset 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: inset 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 3rem;

  @media only screen and (max-width: 900px) {
    padding: 2.5rem 1.75rem;
  }

  @media only screen and (max-width: 700px) {
    padding: 2rem 0.5rem;
  }

  & .hero-content {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    align-items: center;
    align-content: center;
    height: 100%;
    width: 1150px;
    margin: 0 auto;

    @media only screen and (max-width: 1200px) {
      width: 850px;
    }

    @media only screen and (max-width: 900px) {
      width: 650px;
      grid-template-columns: 1fr;
      row-gap: 3rem;
      grid-template-rows: max-content max-content;
    }

    @media only screen and (max-width: 700px) {
      width: 95%;
    }

    &__heading {
      color: var(--font-color-1);
      display: grid;
      row-gap: 2.5rem;

      & > span {
        font-size: 1.8rem;
      }
      & h1 {
        font-size: 2.5rem;

        & span {
          color: var(--color-primary-dark);
        }
      }
      & h2 {
        font-size: 1.125rem;
        font-weight: 400;
        color: var(--font-color-2);
      }

      & .heading-actions {
        display: flex;
        column-gap: 1.5rem;
      }
    }

    &__image {
      display: flex;
      align-items: center;
      justify-content: center;
      & svg {
        width: 100%;
        @media only screen and (max-width: 900px) {
          width: 80%;
          height: 100%;
        }
      }
    }
  }

  & > svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    opacity: 0.6;
    z-index: -1;

    @media only screen and (max-width: 600px) {
      width: auto;
    }
  }
`;
