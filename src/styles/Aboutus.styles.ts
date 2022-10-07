import styled from 'styled-components';

export const Wrapper = styled.article`
  padding: 0 0 2rem;
  position: relative;

  &::before {
    content: '';
    background: rgba(28, 231, 131, 0.15);
    clip-path: polygon(0 0, 50% 100%, 100% 0);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: 80%;
    height: 100vh;
    z-index: -1;

    @media only screen and (max-width: 900px) {
      width: 90%;
    }

    @media only screen and (max-width: 600px) {
      width: 100%;
    }
  }

  .content-wrapper {
    padding: 0.5rem 0;
    width: 1150px;
    margin: 0 auto;

    @media only screen and (max-width: 1200px) {
      width: 850px;
    }

    @media only screen and (max-width: 900px) {
      width: 650px;
    }

    @media only screen and (max-width: 700px) {
      width: 95%;
    }

    .content-box {
      display: grid;
      justify-items: center;
      width: 60%;
      margin: 5rem auto 5rem;
      text-align: center;
      row-gap: 1.5rem;

      @media only screen and (max-width: 900px) {
        width: 80%;
        margin: 5rem auto 3rem;
      }

      @media only screen and (max-width: 600px) {
        width: 95%;
        margin: 5rem auto 0;
      }

      & span {
        color: var(--font-color-3);
        font-weight: 600;
        font-size: 1.1rem;

        @media only screen and (max-width: 600px) {
          font-size: 0.9rem;
        }
      }

      & h1 {
        font-size: 2.5rem;
        color: var(--color-secondary);

        @media only screen and (max-width: 600px) {
          font-size: 2rem;
        }
      }
      & p {
        color: var(--font-color-2);
      }
    }

    & > .img-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      & svg {
      }
    }
  }
`;
