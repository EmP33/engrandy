import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 0 0 2rem;
  position: relative;
  overflow: hidden;

  .content-wrapper {
    padding: 0.5rem 0;
    width: 1150px;
    margin: 0 auto;
    display: grid;
    row-gap: 2rem;

    @media only screen and (max-width: 1200px) {
      width: 850px;
    }

    @media only screen and (max-width: 900px) {
      width: 650px;
    }

    @media only screen and (max-width: 700px) {
      width: 95%;
    }

    .questions {
      margin: 1rem 0;
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 1rem;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;
