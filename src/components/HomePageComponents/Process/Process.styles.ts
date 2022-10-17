import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  height: auto;
  background: #f3fff9;
  overflow: hidden;
  position: relative;
  padding: 5rem 0;

  .content-wrapper {
    width: 1150px;
    margin: 0 auto;

    @media only screen and (max-width: 1200px) {
      width: 850px;
    }

    @media only screen and (max-width: 900px) {
      width: 650px;
    }

    @media only screen and (max-width: 700px) {
      width: 90%;
    }

    h2 {
      font-size: 2.5rem;
      color: var(--color-primary-dark);
    }

    .process-steps {
      margin-top: 2rem;
      display: grid;
      row-gap: 5rem;

      &__step {
        padding: 2rem 0.5rem;
        border-radius: 10px;
        display: grid;
        grid-template-columns: max-content 1fr;
        align-items: center;
        column-gap: 2rem;
        row-gap: 1rem;
        background-color: #fff;
        -webkit-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.15);
        -moz-box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.15);
        box-shadow: 3px 3px 9px 0px rgba(0, 0, 0, 0.15);
        position: relative;

        @media only screen and (max-width: 600px) {
          grid-template-columns: 1fr;
          justify-items: center;
          padding: 1.5rem 0.75rem;
        }

        &::before {
          content: attr(data-number);
          position: absolute;
          right: 0;
          top: 0;
          font-size: 10rem;
          font-weight: 900;
          color: rgba(28, 231, 131, 0.1);
        }

        .image-wrapper {
          width: 100px;
          height: 100px;
          grid-row: span 2;
          @media only screen and (max-width: 600px) {
            grid-row: span 1;
          }
        }

        & svg {
        }

        & h3 {
          color: var(--color-secondary);
          font-size: 1.5rem;
        }
        & p {
          color: var(--color-secondary);
          grid-column: 2/-1;

          @media only screen and (max-width: 600px) {
            grid-column: 1;
          }
        }
      }
    }
    & > svg {
      position: absolute;
      bottom: 0;
    }
  }
`;
