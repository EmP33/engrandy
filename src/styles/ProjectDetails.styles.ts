import styled from 'styled-components';

export const Wrapper = styled.article`
  .image-wrapper {
    overflow: hidden;
    height: 75vh;
    min-height: 400px;
    object-fit: contain;

    @media only screen and (max-width: 900px) {
      height: auto;
    }

    & .image-content {
      position: absolute;
      left: 50%;
      top: 35%;
      transform: translate(-50%, -35%);
      z-index: 10;

      & h1 {
        color: #fff;
        font-size: 5rem;
        letter-spacing: 3px;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);

        @media only screen and (max-width: 900px) {
          font-size: 3rem;
        }
      }
    }

    & img {
      width: 100%;
      height: auto;
      object-fit: cover;
      min-height: 400px;
    }
  }
  .content-wrapper {
    padding: 0.5rem 0;
    width: 1150px;
    margin: 0 auto 2rem;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 300px;
    column-gap: 1rem;
    row-gap: 1rem;
    justify-items: center;

    @media only screen and (max-width: 1200px) {
      width: 850px;
    }

    @media only screen and (max-width: 900px) {
      width: 650px;
      grid-template-columns: 1fr;
    }

    @media only screen and (max-width: 700px) {
      width: 95%;
    }

    .desktop-images,
    .mobile-images {
      display: grid;
      row-gap: 2rem;

      & img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }
    }

    .mobile-images img {
      @media only screen and (max-width: 900px) {
        width: auto;
      }
    }
  }
  & .mockup-wrapper {
    transform: translateY(-50%);
    width: 60%;
    margin: 0 auto;

    @media only screen and (max-width: 1200px) {
      width: 75%;
    }

    @media only screen and (max-width: 900px) {
      width: 90%;
    }

    @media only screen and (max-width: 450px) {
      width: 100%;
    }
  }
`;
