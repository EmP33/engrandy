import styled from 'styled-components';

export const Wrapper = styled.div`
  & span {
    color: var(--font-color-3);
    font-weight: 600;
    font-size: 1.1rem;
    display: block;
    text-align: center;

    @media only screen and (max-width: 600px) {
      font-size: 0.9rem;
    }
  }

  & h2 {
    text-align: center;
    font-size: 2.5rem;
    color: var(--color-secondary);

    @media only screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }
`;
