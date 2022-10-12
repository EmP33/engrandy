import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  background-color: #f3fff9;

  .preview {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: calc(100vw - 550px);
    position: fixed;

    @media only screen and (max-width: 1200px) {
      width: calc(100vw - 500px);
    }

    @media only screen and (max-width: 900px) {
      height: 40vh;
      width: 100vw;
      position: fixed;
      margin-top: 60px;
    }

    & svg {
      font-size: 10rem;
    }
  }
  .configuration-section {
    width: 550px;
    margin-top: 76px;
    margin-left: auto;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    padding: 0.5rem;

    @media only screen and (max-width: 1200px) {
      width: 500px;
      margin-top: 60px;
    }
    @media only screen and (max-width: 900px) {
      height: calc(100vh - 40vh - 60px);
      overflow: auto;
      padding: 0;
      width: 100vw;
      margin-left: 0;
      margin-top: calc(40vh + 60px);
    }

    & form {
      display: grid;
      row-gap: 0.75rem;
    }
  }
`;
