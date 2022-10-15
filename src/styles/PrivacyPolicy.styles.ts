import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 1150px;
  margin: 0 auto;
  padding: 2.5rem 0;
  display: grid;
  row-gap: 1rem;
  font-size: 1.1rem;
  color: var(--font-color-1);

  @media only screen and (max-width: 1200px) {
    width: 850px;
  }

  @media only screen and (max-width: 900px) {
    width: 650px;
  }

  @media only screen and (max-width: 700px) {
    width: 95%;
  }

  & ul {
    padding-left: 1.4rem;
  }
`;
