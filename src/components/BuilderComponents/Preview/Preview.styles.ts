import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 70%;
  height: 60%;
  border: 3px solid #ddd;
  border-radius: 5px;
  background: #fff;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
  overflow: auto;

  @media only screen and (max-width: 1400px) {
    width: 90%;
    height: 50%;
  }
  @media only screen and (max-width: 1200px) {
    width: 95%;
    height: 40%;
  }
  @media only screen and (max-width: 900px) {
    width: 60%;
    height: 80%;
  }
  @media only screen and (max-width: 700px) {
    width: 85%;
    height: 80%;
  }
  @media only screen and (max-width: 450px) {
    width: 95%;
    height: 80%;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  & .navigation {
    width: 100%;
    height: 7%;
    display: grid;
    grid-template-columns: 1fr max-content;
    align-items: center;
    padding: 0 2rem;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);

    & span {
      @media only screen and (max-width: 900px) {
        font-size: 90%;
      }
    }

    & svg {
      font-size: 120%;
    }
  }

  .hero {
    height: 93%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    position: relative;
    width: 85%;
    margin: 0 auto;

    &__content {
      display: grid;
      row-gap: 1rem;
      & .heading {
        background-color: #ccc;
        width: 50%;
        height: 25px;
      }

      & .subheading {
        background-color: #ccc;
        width: 70%;
        height: 20px;
      }
    }
    & svg {
      &:first-of-type {
        width: 75%;
        justify-self: center;
      }
      &:nth-of-type(2) {
        width: 4%;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 20%);
        color: #777;
      }
    }
  }

  .section {
    height: 100%;
    border: 3px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #aaa;
    font-size: 2rem;
  }

  footer {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;

    @media only screen and (max-width: 900px) {
      font-size: 70%;
    }
  }
`;
