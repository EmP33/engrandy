import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: grid;
  place-items: center;

  .message-box {
    background: var(--color-primary);
    color: var(--color-secondary);
    padding: 2.5rem;
    width: 400px;
    height: 300px;
    display: grid;
    justify-items: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    position: relative;

    @media only screen and (max-width: 450px) {
      width: 90%;
    }

    & svg {
      font-size: 5rem;
      &:first-of-type {
        cursor: pointer;
        font-size: 3rem;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    & span {
      font-size: 1.2rem;
    }
  }
`;
