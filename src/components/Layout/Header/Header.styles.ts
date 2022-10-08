import styled from 'styled-components';
import { Link } from 'gatsby-plugin-react-i18next';

export const Wrapper = styled.header<{ isScrolled: boolean }>`
  width: 100%;
  z-index: 99;
  position: ${({ isScrolled }) =>
    isScrolled ? '-webkit-sticky' : 'static'}; /* Safari */
  position: ${({ isScrolled }) => (isScrolled ? 'sticky' : 'static')};
  top: 0;
  background-color: #fff;
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
      padding: ${({ isScrolled }) => (isScrolled ? '0 0.5rem' : '0')};
      transition: all 0.2s linear;

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
        column-gap: 3rem;

        @media only screen and (max-width: 1200px) {
          display: none;
        }

        & .dropdown {
          visibility: hidden;
          position: absolute;
          background: #fff;
          -webkit-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.15);
          -moz-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.15);
          box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.15);
          min-width: 15rem;
          transform: translateY(25px);
          transition: all 0.05s linear;
          z-index: 9;

          &:hover {
            visibility: visible;
            transform: translateY(0);
          }

          &__content {
            position: relative;
            z-index: 0;
            overflow: hidden;
            padding: 2rem;
            display: grid;
            row-gap: 1rem;

            &::before {
              content: '';
              position: absolute;
              z-index: -2;
              left: -50%;
              top: -50%;
              width: 200%;
              height: 200%;
              background-color: transparent;
              background-repeat: no-repeat;
              background-size: 50% 50%, 50% 50%;
              background-position: 0 0, 100% 0, 100% 100%, 0 100%;
              background-image: linear-gradient(
                  var(--color-primary),
                  var(--color-primary)
                ),
                linear-gradient(transparent, transparent),
                linear-gradient(transparent, transparent),
                linear-gradient(transparent, transparent);
              animation: rotate 4s linear infinite;
            }

            &::after {
              content: '';
              position: absolute;
              z-index: -1;
              left: 6px;
              top: 6px;
              width: calc(100% - 12px);
              height: calc(100% - 12px);
              background: white;
            }

            @keyframes rotate {
              100% {
                transform: rotate(1turn);
              }
            }

            & > a {
              font-size: 0.85rem;
              text-decoration: none;
              color: var(--font-color-1);
              font-weight: 600;
              max-width: 70%;

              & span {
                display: block;

                &:nth-of-type(2) {
                  font-weight: 400;
                  color: var(--font-color-2);
                  font-size: 0.8rem;
                }
              }

              &:hover {
                & span {
                  color: #000;
                  text-decoration: underline;

                  &:nth-of-type(2) {
                    text-decoration: none;
                    font-weight: 400;
                    color: var(--font-color-2);
                  }
                }
              }
            }
          }
        }

        & li > a {
          display: flex;
          color: var(--font-color-1);
          text-decoration: none;
          font-weight: 500;
          padding: 1.5rem 0.25rem;
          position: relative;
          align-items: center;

          &:hover {
            color: var(--color-primary);
            &::after {
              width: 100%;
            }
            & ~ .dropdown {
              visibility: visible;
              transform: translateY(0);
              transition: all 0.15s linear;
              transition-delay: 0.3s;
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

      & > svg {
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
