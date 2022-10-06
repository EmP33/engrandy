import styled from 'styled-components';

export const PrimaryButtonStyle = styled.button<{ dark: boolean }>`
  background-color: ${({ dark }) =>
    dark ? 'var(--color-secondary)' : 'var(--color-primary)'};
  padding: 1rem 1rem;
  color: ${({ dark }) =>
    dark ? 'var(--color-primary)' : 'var(--color-secondary)'};
  font-size: 0.9rem;
  font-weight: 600;
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover > div > div {
    transform: translateY(-50%);
  }

  & > div {
    height: 16px;
    overflow: hidden;

    & div {
      transition: all 0.15s linear;
      display: grid;
    }
  }
`;

export const OutlineButtonStyle = styled.button`
  background: transparent;
  padding: 1rem 1rem;
  color: var(--color-secondary);
  font-size: 0.9rem;
  font-weight: 600;
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover > div > div {
    transform: translateY(-50%);
    text-decoration: underline;
  }

  & > div {
    height: 16px;
    overflow: hidden;

    & div {
      transition: all 0.15s linear;
      display: grid;
    }
  }
`;
