import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  color: var(--color-secondary);
  padding: 2rem 0 5rem;
  overflow: hidden;

  .info {
    width: 1150px;
    margin: 5rem auto 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 360px));
    justify-content: center;
    grid-auto-rows: 170px;
    row-gap: 2rem;
    column-gap: 2rem;

    @media only screen and (max-width: 1200px) {
      width: 850px;
    }

    @media only screen and (max-width: 900px) {
      width: 650px;
    }

    @media only screen and (max-width: 700px) {
      width: 90%;
    }

    @media only screen and (max-width: 400px) {
      grid-template-columns: 1fr;
    }

    &__block {
      background: var(--color-secondary);
      padding: 2rem 1rem;
      display: grid;
      justify-items: center;
      row-gap: 1rem;
      text-align: center;
      border-radius: 10px;
      -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.35);
      -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.35);
      box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.35);
      transition: all 0.2s linear;
      cursor: pointer;

      & svg {
        font-size: 3rem;
        color: #fff;
      }
      & h3 {
        font-size: 16px;
        color: var(--font-color-3);
      }
    }
  }
`;
