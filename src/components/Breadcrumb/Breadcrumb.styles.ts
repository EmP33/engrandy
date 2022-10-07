import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  color: var(--font-color-3);
  font-size: 0.9rem;

  & a {
    color: var(--font-color-3);
    text-decoration: none;
    transition: all 0.2s linear;

    &:hover {
      color: var(--color-primary-dark);
    }
  }
`;
