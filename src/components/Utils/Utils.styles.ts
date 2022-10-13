import styled from 'styled-components';

export const PrimaryButtonStyle = styled.button<{
  dark: boolean;
  type?: string;
}>`
  background-color: ${({ dark }) =>
    dark ? 'var(--color-secondary)' : 'var(--color-primary)'};
  font-size: 0.9rem;
  font-weight: 600;
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover .wrapper > .inside-wrapper {
    transform: translateY(-50%);
  }

  & a {
    display: block;
    color: ${({ dark }) =>
      dark ? 'var(--color-primary)' : 'var(--color-secondary)'};
    text-decoration: none;
    padding: 1rem 1rem;
  }

  & .wrapper {
    height: 16px;
    overflow: hidden;

    & .inside-wrapper {
      transition: all 0.15s linear;
      display: grid;
    }
  }
`;

export const OutlineButtonStyle = styled.button`
  background: transparent;
  padding: 1rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  border: 0;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover .wrapper > .inside-wrapper {
    transform: translateY(-50%);
    text-decoration: underline;
  }

  & a {
    color: var(--color-secondary);
    text-decoration: none;
  }

  & .wrapper {
    height: 16px;
    overflow: hidden;

    & .inside-wrapper {
      transition: all 0.15s linear;
      display: grid;
    }
  }
`;
