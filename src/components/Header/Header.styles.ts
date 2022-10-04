import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  -webkit-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);

  .notification-bar {
    border-bottom: 1px solid #eee;
    padding: 0.75rem 0;

    &__container {
      width: 1150px;
      margin: 0 auto;
      color: var(--font-color-2);
      font-size: 14px;
      font-weight: 300;

      @media only screen and (max-width: 1200px) {
        width: 850px;
      }

      @media only screen and (max-width: 900px) {
        width: 650px;
      }

      @media only screen and (max-width: 700px) {
        width: 90%;
      }

      & a {
        text-decoration: none;
        color: var(--font-color-2);
        font-weight: 600;
        &:hover,
        &:active {
          text-decoration: underline;
        }
      }
    }
  }

  .appbar {
    &__container {
      margin: 0 auto;
      width: 1150px;
      display: grid;
      grid-template-columns: max-content 1fr max-content;
      justify-items: center;
      align-items: center;

      @media only screen and (max-width: 1200px) {
        grid-template-columns: max-content 1fr repeat(2, max-content);
        column-gap: 1.25rem;
        width: 850px;
        padding: 0.5rem 0;
      }

      @media only screen and (max-width: 900px) {
        grid-template-columns: max-content 1fr repeat(2, max-content);
        column-gap: 1.25rem;
        width: 650px;
        padding: 0.5rem 0;
      }

      @media only screen and (max-width: 700px) {
        grid-template-columns: max-content 1fr max-content;
        width: 90%;
      }

      & > a {
        color: var(--font-color-1);
        text-decoration: none;
        font-weight: 600;
        font-size: 1.125rem;
      }

      & ul {
        display: flex;
        list-style: none;
        column-gap: 3.5rem;

        @media only screen and (max-width: 1200px) {
          display: none;
        }

        & a {
          display: block;
          color: var(--font-color-1);
          text-decoration: none;
          font-weight: 500;
          padding: 1.5rem 0.25rem;
          position: relative;

          &:hover {
            color: var(--color-primary);
            &::after {
              width: 100%;
            }
          }

          &::after {
            content: '';
            border-bottom: 3px solid var(--color-primary);
            position: absolute;
            left: 0;
            top: 0;
            width: 0;
            height: 100%;
            transition: all 0.15s linear;
          }
        }
      }

      & button {
        @media only screen and (max-width: 700px) {
          display: none;
        }
      }

      & svg {
        font-size: 2rem;
        color: #333;
        cursor: pointer;

        @media only screen and (min-width: 1200px) {
          display: none;
        }
      }
    }
  }
`;
