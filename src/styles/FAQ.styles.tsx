import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 0 0 2rem;
  position: relative;
  overflow: hidden;

  .content-wrapper {
    padding: 0.5rem 0;
    width: 1150px;
    margin: 0 auto;

    .questions {
      margin: 3rem 0;
      display: grid;
      row-gap: 1rem;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;
