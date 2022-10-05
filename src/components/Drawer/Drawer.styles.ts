import styled from 'styled-components';

export const Wrapper = styled.div<{ showDrawer: boolean }>`
  width: ${({ showDrawer }) => (showDrawer ? '360px' : 0)};
  opacity: ${({ showDrawer }) => (showDrawer ? 1 : 0)};
  height: 100vh;
  background: var(--color-primary);
  position: fixed;
  top: 0;
  right: 0;
  transition: all 0.15s linear;
  padding: ${({ showDrawer }) => (showDrawer ? '1.5rem 2rem;' : 0)};

  @media screen and (max-width: 400px) {
    width: ${({ showDrawer }) => (showDrawer ? '100%' : 0)};
    padding: ${({ showDrawer }) => (showDrawer ? '1rem 1.5rem;' : 0)};
  }

  & .drawer-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      font-size: 1.125rem;
      color: var(--font-color-1);
      text-decoration: none;
    }
    svg {
      font-size: 1.8rem;
      cursor: pointer;
    }
  }

  nav {
    margin-top: 3rem;
  }

  ul {
    list-style: none;
    display: grid;
    row-gap: 2rem;
    width: 100%;

    & li {
      width: 100%;

      & > a {
        width: 100%;
        display: flex;
        padding: 1rem 0;
        color: var(--font-color-1);
        text-decoration: none;
        font-weight: 500;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        justify-content: space-between;

        &:hover {
          border-bottom: 1px solid rgba(0, 0, 0, 1);
        }
      }

      & .dropdown {
        width: 100%;
        transition: max-height 0.5s linear, opacity 0.1s linear 0.1s;
        transition-delay: 0;
        overflow: hidden;
        max-height: 0;
        opacity: 0;

        &-active {
          max-height: 500px;
          transition: max-height 0.5s linear, opacity 0.1s linear 0.1s;

          transition-delay: 0;
          opacity: 1;
        }

        &__content {
          position: relative;
          z-index: 0;
          overflow: hidden;
          padding: 1rem 0;
          display: grid;
          row-gap: 1rem;

          & > a {
            font-size: 1rem;
            text-decoration: none;
            color: var(--font-color-1);
            font-weight: 600;
            max-width: 100%;

            & span {
              display: block;

              &:nth-of-type(2) {
                font-weight: 400;
                color: #3d3d3d;
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
                  color: #3d3d3d;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const Backdrop = styled.div<{ showDrawer: boolean }>`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  display: ${({ showDrawer }) => (showDrawer ? 'block' : 'none')};
`;
