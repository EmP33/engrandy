import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  background-color: var(--color-primary);
  padding: 1rem 0;

  .content-wrapper {
    width: 900px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 1rem;

    @media only screen and (max-width: 900px) {
      width: 650px;
    }

    @media only screen and (max-width: 700px) {
      width: 90%;
      flex-direction: column;
      align-items: start;
      row-gap: 3rem;
    }

    @media only screen and (max-width: 500px) {
      row-gap: 2rem;
    }

    & h2 {
      font-size: 1.6rem;
      color: var(--color-secondary);

      @media only screen and (max-width: 900px) {
        font-size: 1.2rem;
      }

      @media only screen and (max-width: 700px) {
        font-size: 1.6rem;
      }
      @media only screen and (max-width: 500px) {
        font-size: 1.5rem;
      }
    }

    & button {
      padding: 1rem 3rem;

      @media only screen and (max-width: 500px) {
        padding: 1.5rem 3rem;
        width: 100%;
      }
    }
  }
`;
