import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  background: #fff;
  -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.05);
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  z-index: 99;

  & .home-link {
    font-weight: 600;
    display: flex;
    align-items: center;
    color: var(--font-color-2);
    font-weight: 600;
    text-decoration: none;
    padding: 1.5rem 2rem;
    font-size: 1.1rem;
    border-bottom: 3px solid #fff;

    @media only screen and (max-width: 1200px) {
      padding: 1.3rem 1.2rem;
    }

    @media only screen and (max-width: 900px) {
      font-size: 1rem;
      padding: 1rem 1rem;
    }
    @media only screen and (max-width: 750px) {
      padding: 1rem 0.5rem;
    }
    @media only screen and (max-width: 700px) {
      color: #000;
      padding: 0.5rem 0.75rem;
    }

    & svg {
      font-size: 1.5rem;
    }
  }

  & span {
    font-weight: 500;
    color: var(--font-color-1);
    margin-right: 3rem;
  }

  ul {
    display: flex;
    list-style: none;

    /* @media only screen and (max-width: 900px) {
      display: none;
    } */

    & a {
      color: var(--font-color-2);
      font-weight: 600;
      text-decoration: none;
      padding: 1.5rem 2rem;
      font-size: 1.1rem;
      border-bottom: 3px solid #fff;

      @media only screen and (max-width: 1200px) {
        padding: 1.3rem 1.2rem;
      }

      @media only screen and (max-width: 900px) {
        font-size: 1rem;
        padding: 1rem 1rem;
      }
      @media only screen and (max-width: 750px) {
        padding: 1rem 0.5rem;
      }
      @media only screen and (max-width: 700px) {
        display: none;
      }

      &:hover {
        color: #000;
      }
    }
  }

  .is-active {
    border-bottom: 3px solid var(--color-secondary);
    color: #000;
  }
`;
