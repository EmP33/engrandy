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
  padding: 1.5rem 2rem;

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
    }
    & a {
      width: 100%;
      display: block;
      padding: 1rem 0;
      color: var(--font-color-1);
      text-decoration: none;
      font-weight: 500;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);

      &:hover {
        border-bottom: 1px solid rgba(0, 0, 0, 1);
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
