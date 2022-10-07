import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 0.5rem 0;
  width: 1150px;
  margin: 0 auto;

  @media only screen and (max-width: 1200px) {
    width: 850px;
  }

  @media only screen and (max-width: 900px) {
    width: 650px;
  }

  @media only screen and (max-width: 700px) {
    width: 95%;
  }
`;
