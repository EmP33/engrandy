import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  min-height: 80vh;
  background-color: var(--color-tertiary);
  position: relative;
  padding: 5rem 0;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    padding: 4rem 0.5rem;
  }

  & h2 {
    font-size: 2.5rem;
    color: #fff;
    text-align: center;

    @media only screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }

  .packages {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 450px));
    justify-content: center;
    column-gap: 2rem;
    row-gap: 2rem;
    padding: 5rem 1.5rem;
    color: var(--color-secondary);

    @media only screen and (max-width: 450px) {
      grid-template-columns: 1fr;
      padding: 3rem 0.5rem;
    }

    &__package {
      background-color: #fff;
      padding: 2.5rem 1rem;
      border-radius: 10px;
      -webkit-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.35);
      -moz-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.35);
      box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.35);

      &:nth-of-type(1) {
        background: #ebf8f8;
      }

      &:nth-of-type(2) {
        background: #fbeef7;
      }
      &:nth-of-type(3) {
        background: #fef5dc;
      }

      @media only screen and (min-width: 1479px) {
        &:nth-of-type(2) {
          transform: scale(1.05);
        }
      }

      & h3 {
        width: 90%;
        margin: 0 auto;
        font-size: 1.5rem;
        text-align: center;
        border-bottom: 1px solid var(--color-secondary);
        padding: 0.5rem 0;
      }

      & ul {
        list-style: none;
        margin: 0 auto;
        padding: 0.5rem 0;
        width: 90%;

        & li {
          display: flex;
          align-items: center;
          margin: 0.5rem 0;

          & svg {
            color: var(--color-primary-dark);
            font-size: 1.5rem;
          }
        }
      }

      .package__action {
        border-top: 1px solid var(--color-secondary);
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 0.5rem;
        padding: 1rem 0 0;

        & h4 {
          font-size: 1.75rem;
        }
      }
    }
  }

  & > span {
    color: #fff;
    display: block;
    width: 100%;
    text-align: center;

    & a {
      color: #aaa;
      font-weight: bold;
    }
  }
`;
