import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #eee;
  color: var(--color-secondary);
  justify-self: center;
  border-radius: 2px;
  padding: 1rem;
  display: inline-block;

  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }

  ul {
    padding: 0.5rem 0rem;
    list-style: none;

    @media only screen and (max-width: 600px) {
      padding: 0.4rem 0;
    }
  }
`;
