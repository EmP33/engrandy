import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #444;
  width: 100%;
  min-height: 100vh;
  display: grid;
  place-items: center;

  .content {
    margin: 3rem 0;
    background: #fff;
    padding: 2rem;
    width: 70%;
    position: relative;

    @media only screen and (max-width: 1200px) {
      width: 90%;
    }

    @media only screen and (max-width: 600px) {
      width: 100%;
      height: 100%;
      padding: 0.5rem;
    }
    @media only screen and (max-width: 400px) {
      padding: 0;
    }

    & > svg {
      font-size: 2rem;
      position: absolute;
      right: 5px;
      top: 5px;
      cursor: pointer;
      color: var(--color-secondary);

      &:hover {
        color: #333;
      }
    }

    .preview {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 55vh;
      width: 100%;

      & > svg {
        font-size: 10rem;
      }
    }

    .summary {
      width: 90%;
      margin: 3rem auto;

      @media only screen and (max-width: 1000px) {
        row-gap: 2rem;
        grid-template-columns: 1fr;
      }
      @media only screen and (max-width: 600px) {
        margin: 1rem auto;
      }

      &-details {
        margin-bottom: 2rem;
      }

      & > h3 {
        margin: 3rem 0 1rem;
        font-size: 1.6rem;
        font-weight: 300;
        text-transform: uppercase;
        color: #666;

        @media only screen and (max-width: 600px) {
          margin: 1rem 0;
        }

        & span {
          font-weight: bold;
        }
      }

      form {
        display: grid;
        align-items: center;
        align-content: center;
        grid-column: 1/-1;

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
  }
`;
