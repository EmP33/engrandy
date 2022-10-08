import styled from 'styled-components';

export const Wrapper = styled.footer`
  width: 100%;
  background: var(--color-secondary);
  padding: 6rem;
  display: grid;
  grid-template-columns: max-content 1fr max-content;

  @media only screen and (max-width: 1200px) {
    padding: 5rem 3rem;
  }

  @media only screen and (max-width: 900px) {
    padding: 2.5rem 1.5rem;
  }

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    row-gap: 3rem;
  }

  @media only screen and (max-width: 500px) {
    padding: 2rem 1rem;
  }

  & span {
    font-size: 2.5rem;
    font-weight: bold;
    color: #fff;

    @media only screen and (max-width: 900px) {
      font-size: 2rem;
    }
  }

  & .footer-blocks {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    justify-items: center;

    @media only screen and (max-width: 800px) {
      grid-template-columns: 1fr;
      row-gap: 1rem;
      justify-items: start;
    }

    &__block {
      & h3 {
        color: #fff;
        font-size: 16px;
        margin-bottom: 24px;
      }
      & ul {
        list-style: none;

        & a {
          color: var(--font-color-3);
          text-decoration: none;
          font-size: 16px;

          & li {
            margin: 0.5rem 0;
          }
        }
      }
    }
  }

  & .socials {
    color: #fff;
    font-size: 1.4rem;
    display: flex;
    column-gap: 1rem;

    @media only screen and (max-width: 900px) {
      font-size: 1.1rem;
    }

    @media only screen and (max-width: 800px) {
      font-size: 1.2rem;
      justify-content: center;
    }
  }

  & .copyright {
    grid-column: 1/-1;
    border-top: 1px solid var(--font-color-3);
    text-align: center;
    color: var(--font-color-3);
    padding: 2.5rem 0 0;
    margin-top: 7.5rem;

    @media only screen and (max-width: 900px) {
      margin-top: 4rem;
    }

    @media only screen and (max-width: 800px) {
      margin-top: 2rem;
    }
  }
`;
