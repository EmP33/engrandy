import styled from 'styled-components';

export const Wrapper = styled.section`
  overflow: hidden;
  margin: 0 auto;
  width: 1500px;
  padding: 0.5rem 0;
  display: grid;
  row-gap: 2rem;

  @media only screen and (max-width: 1550px) {
    width: 1200px;
  }

  @media only screen and (max-width: 1250px) {
    width: 950px;
  }

  @media only screen and (max-width: 1000px) {
    width: 750px;
  }

  @media only screen and (max-width: 800px) {
    width: 90%;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 270px;
    grid-gap: 0.75rem;
    margin: 1rem 0 3rem;

    @media only screen and (max-width: 1550px) {
      grid-auto-rows: 250px;
    }
    @media only screen and (max-width: 1250px) {
      grid-auto-rows: 220px;
    }
    @media only screen and (max-width: 1000px) {
      grid-auto-rows: 190px;
    }
    @media only screen and (max-width: 800px) {
      grid-template-columns: 1fr;
      grid-auto-rows: 250px;
    }
    @media only screen and (max-width: 570px) {
      grid-auto-rows: 150px;
    }

    .col-xs {
      grid-column: span 1;
      @media only screen and (max-width: 800px) {
        grid-column: span 3;
      }
    }

    .col-sm {
      grid-column: span 2;

      @media only screen and (max-width: 800px) {
        grid-column: span 3;
      }
    }
    .col-md {
      grid-column: span 3;
    }
    .col-lg {
      grid-column: span 2;
      grid-row: span 2;

      @media only screen and (max-width: 800px) {
        grid-column: span 3;
        grid-row: span 1;
      }
    }
  }
`;
