import styled from 'styled-components';

export const Wrapper = styled.article`
  width: 100%;
  min-height: 100vh;
  background: var(--color-secondary);
  position: relative;
  padding: 5rem 0;
  overflow: hidden;

  & > svg {
    position: absolute;
    width: 450px;
    z-index: 0;
    transform: translateX(-80%);
    border-radius: 50%;
    &:nth-of-type(1) {
      left: 80%;
      transform: translateX(-80%);
    }
    &:nth-of-type(2) {
      left: 10%;
      bottom: 0;
      transform: translateX(-10%);
    }

    @media only screen and (max-width: 600px) {
      width: 250px;
    }
  }

  .content-wrapper {
    width: 1150px;
    margin: 0 auto;
    display: grid;
    align-items: center;
    justify-items: start;
    row-gap: 6rem;
    z-index: 100;

    @media only screen and (max-width: 1200px) {
      width: 850px;
    }

    @media only screen and (max-width: 900px) {
      width: 650px;
    }

    @media only screen and (max-width: 700px) {
      width: 90%;
    }

    & h2 {
      font-size: 4.5rem;
      z-index: 1;
      color: var(--color-primary);
      position: relative;

      @media only screen and (max-width: 900px) {
        font-size: 3.5rem;
      }

      &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-bottom: 2px solid var(--font-color-3);
      }
      &::before {
        content: '';
        width: 70%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-bottom: 2px solid var(--font-color-3);
        transform: rotate(1deg);
        transform-origin: 0;
      }
    }

    .content-blocks {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      row-gap: 2rem;
      column-gap: 2rem;
      z-index: 1;

      @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
      }

      &__block {
        background: var(--color-primary);
        padding: 2rem;
        border-radius: 10px;
        color: var(--color-secondary);
        display: grid;
        row-gap: 1rem;
        -webkit-box-shadow: 3px 3px 8px 0px rgba(137, 142, 145, 0.15);
        -moz-box-shadow: 3px 3px 8px 0px rgba(137, 142, 145, 0.15);
        box-shadow: 3px 3px 8px 0px rgba(137, 142, 145, 0.15);
        cursor: pointer;
        transition: all 0.2s ease;

        @media only screen and (max-width: 600px) {
          padding: 1.5rem;
        }

        & svg {
          font-size: 5rem;
        }

        &:nth-of-type(2n) {
          background: var(--color-secondary);
          color: var(--color-primary);

          &:hover {
            background: var(--color-primary);
            color: var(--color-secondary);
            transform: translateY(-15px);
          }
        }

        &:hover {
          background: var(--color-secondary);
          color: var(--color-primary);
          transform: translateY(-15px);
        }
      }
    }
  }
`;
