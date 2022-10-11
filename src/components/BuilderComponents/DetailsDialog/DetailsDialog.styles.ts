import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
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
    display: grid;
    grid-template-columns: minmax(300px, 1fr) 1fr;
    column-gap: 1rem;
    row-gap: 1rem;

    @media only screen and (max-width: 1200px) {
      width: 90%;
      padding: 1rem;
    }

    @media only screen and (max-width: 900px) {
      display: flex;
      flex-direction: column-reverse;
      padding: 1.5rem;
      row-gap: 3rem;
    }

    @media only screen and (max-width: 600px) {
      width: 100vw;
      height: 100vh;
      justify-content: center;
      padding: 0.75rem;
    }

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
