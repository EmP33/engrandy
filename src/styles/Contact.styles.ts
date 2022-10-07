import styled from 'styled-components';

export const Wrapper = styled.article`
  padding: 0.5rem 0;
  width: 1150px;
  margin: 0 auto;
  overflow: hidden;

  @media only screen and (max-width: 1200px) {
    width: 850px;
  }

  @media only screen and (max-width: 900px) {
    width: 650px;
  }

  @media only screen and (max-width: 700px) {
    width: 95%;
  }

  h2 {
    text-align: center;
    font-size: 2rem;
    color: var(--color-secondary);
    margin: 2.5rem 0 0;

    @media only screen and (max-width: 600px) {
      font-size: 1.6rem;
    }
  }

  .content-wrapper {
    display: grid;
    padding: 1rem 0 2.5rem;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    row-gap: 2rem;

    @media only screen and (max-width: 900px) {
      grid-template-columns: 1fr;
      row-gap: 0;
    }

    & svg {
      width: 80%;
      justify-self: center;

      @media only screen and (max-width: 900px) {
        width: 65%;
        height: 80%;
      }
    }

    form {
      display: grid;
      align-items: center;
      align-content: center;

      & input,
      textarea {
        border: 0;
        padding: 1rem 0.2rem;
        border-bottom: 1px solid var(--font-color-3);
        font-size: 1.2rem;
        color: var(--color-secondary);
        margin: 0.75rem 0;

        &::placeholder {
          color: var(--font-color-2);
          font-family: 'Inter', sans-serif;
        }
      }

      & > span {
        color: #f44336;
        font-size: 0.9rem;
      }

      & button {
        justify-self: end;
        padding: 1rem 3rem;
      }
    }
  }
`;
