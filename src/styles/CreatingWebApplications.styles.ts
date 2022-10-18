import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 0 0 2rem;
  position: relative;
  overflow: hidden;

  .content-wrapper {
    padding: 0.5rem 0;
    width: 1150px;
    margin: 0 auto;
    display: grid;
    row-gap: 2rem;

    @media only screen and (max-width: 1200px) {
      width: 850px;
    }

    @media only screen and (max-width: 900px) {
      width: 650px;
    }

    @media only screen and (max-width: 700px) {
      width: 95%;
    }

    &__heading {
      margin: 2rem auto;
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 1rem;
      column-gap: 2rem;
      align-items: center;
      width: 60%;
      text-align: center;

      @media only screen and (max-width: 900px) {
        width: 100%;
      }

      & p {
        margin-top: 0.5rem;
        color: var(--font-color-2);
      }

      & svg {
        width: 90%;
        height: 90%;
        margin: 0 auto;

        @media only screen and (max-width: 600px) {
          width: 100%;
          height: 100%;
        }
      }
    }

    &__blocks {
      margin-top: 5rem;

      & .heading {
        width: 60%;
        margin: 0 auto;

        @media only screen and (max-width: 900px) {
          width: 100%;
        }

        & p {
          text-align: center;
          margin-top: 0.5rem;
          color: var(--font-color-2);
        }

        & h3 {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 400;
          text-transform: uppercase;
        }
      }

      & .blocks {
        margin-top: 7rem;
        display: grid;
        row-gap: 2rem;
        column-gap: 2rem;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

        & .block {
          color: var(--color-secondary);
          display: grid;
          grid-template-columns: max-content 1fr;
          grid-template-rows: minmax(max-content, 40px) auto;
          column-gap: 2rem;
          row-gap: 0.5rem;

          & h4 {
            font-size: 1.4rem;
            font-weight: 500;
          }

          & p {
            color: var(--font-color-2);
          }

          & svg {
            grid-row: span 2;
            font-size: 4rem;

            @media only screen and (max-width: 900px) {
              font-size: 3rem;
            }
          }
        }
      }
    }
  }
`;
