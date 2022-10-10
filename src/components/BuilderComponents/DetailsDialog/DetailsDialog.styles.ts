import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  .details {
    width: 80%;
    background: #fff;
    padding: 1.5rem;
    color: var(--color-secondary);

    &__heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      & h2 {
        font-size: 2rem;
        font-weight: 300;

        display: inline-block;
      }
      & svg {
        font-size: 2rem;
        color: var(--font-color-2);
        cursor: pointer;
        &:hover {
          color: #000;
        }
      }
    }

    &__content {
      display: grid;
      row-gap: 0.5rem;

      & ul {
        padding-left: 1rem;
      }
    }
  }
`;
