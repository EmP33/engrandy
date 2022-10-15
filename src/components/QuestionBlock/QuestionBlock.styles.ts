import styled from 'styled-components';

export const Wrapper = styled.div<{ showDetails: boolean }>`
  border: 1px solid var(--font-color-3);
  border-radius: 5px;
  display: grid;

  .question-answer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 1rem 1.5rem;
    cursor: pointer;
    transition: all 0.1s linear;
    background: ${({ showDetails }) =>
      showDetails ? 'var(--color-primary)' : 'transparent'};
    color: ${({ showDetails }) =>
      showDetails ? 'var(--color-secondary)' : 'var(--font-color-3)'};

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-secondary);
    }

    & h3 {
      font-weight: 500;
      font-size: 1.1rem;
    }
    & svg {
      font-size: 1.6rem;
      transform: ${({ showDetails }) =>
        showDetails ? 'rotate(0)' : 'rotate(-90deg)'};
      transition: all 0.15s linear;
    }
  }

  .hidden-content {
    display: block;
    color: var(--font-color-2);
    font-size: 15px;
    max-height: ${({ showDetails }) => (showDetails ? '100px' : 0)};
    overflow: hidden;
    transition: max-height 0.3s ease-in, padding 0.4s linear;

    @media only screen and (max-width: 600px) {
      overflow: auto;
    }

    & > p {
      padding: 1rem 1.5rem;
    }
  }
`;
