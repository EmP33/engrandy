import styled from 'styled-components';

export const Wrapper = styled.div<{ theme: 'light' | 'dark'; type?: string }>`
  width: ${({ type }) => (type === 'order-type' ? '90%' : '70%')};
  height: ${({ type }) => (type === 'order-type' ? '100%' : '60%')};
  border: 3px solid #ddd;
  border-radius: 5px;
  background: #fff;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
  overflow: auto;
  position: relative;

  @media only screen and (max-width: 1400px) {
    width: 90%;
    height: ${({ type }) => (type === 'order-type' ? '90%' : '50%')};
  }
  @media only screen and (max-width: 1200px) {
    height: ${({ type }) => (type === 'order-type' ? '80%' : '40%')};
  }
  @media only screen and (max-width: 900px) {
    width: ${({ type }) => (type === 'order-type' ? '90%' : '60%')};
    height: 80%;
  }
  @media only screen and (max-width: 700px) {
    width: ${({ type }) => (type === 'order-type' ? '95%' : '85%')};
    height: 80%;
  }
  @media only screen and (max-width: 450px) {
    width: 95%;
    height: ${({ type }) => (type === 'order-type' ? '60%' : '80%')};
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);

    @media only screen and (max-width: 1100px) {
      padding: 0 1rem;
    }

    & span {
      @media only screen and (max-width: 900px) {
        font-size: 90%;
      }
    }

    & nav {
      display: flex;
      font-size: 85%;
      column-gap: 1.5rem;

      @media only screen and (max-width: 1100px) {
        column-gap: 0.5rem;
      }

      & span {
        cursor: pointer;
        color: #666;

        &:hover {
          color: #000;
        }
      }
    }

    & div {
      display: flex;
      align-items: center;
      column-gap: 0.8rem;
      color: #666;
      cursor: pointer;

      & span {
        &:hover {
          color: #000;
        }
      }
      & svg {
        &:hover {
          color: #000;
        }
      }

      .switch {
        position: relative;
        display: inline-block;
        width: 30px;
        height: 15px;

        & input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }

        .slider:before {
          position: absolute;
          content: '';
          height: 12px;
          width: 12px;
          left: 2px;
          top: 50%;
          transform: translateY(-50%);
          background-color: white;
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }

        input:checked + .slider {
          background-color: var(--color-secondary);
        }

        input:focus + .slider {
          box-shadow: 0 0 1px var(--color-secondary);
        }

        input:checked + .slider:before {
          -webkit-transform: translate(115%, -50%);
          -ms-transform: translate(115%, -50%);
          transform: translate(115%, -50%);
        }

        /* Rounded sliders */
        .slider.round {
          border-radius: 34px;
        }

        .slider.round:before {
          border-radius: 50%;
        }
      }
    }

    & img {
      width: 100%;
      height: 30px;

      @media only screen and (max-width: 900px) {
        height: 20px;
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

    &-slides-buttons {
      position: absolute;
      bottom: 10%;
      left: 5%;
      display: flex;
      column-gap: 0.5rem;
      transform: translate(-10%, -5%);

      & span {
        display: block;
        width: 35px;
        height: 5px;
        background-color: #999;
        cursor: pointer;

        &:hover {
          background-color: #333;
        }
      }
    }

    &__content {
      display: grid;
      row-gap: 1rem;

      & img {
        width: 75px;
      }
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
    align-items: center;
    padding: 0.5rem 1rem;

    @media only screen and (max-width: 900px) {
      font-size: 70%;
    }

    @media only screen and (max-width: 500px) {
      padding: 0.25rem 0.4rem;
      font-size: 65%;
    }
  }

  .socials {
    display: flex;
    height: 100%;
    align-items: center;
    column-gap: 0.5rem;

    @media only screen and (max-width: 600px) {
      column-gap: 0.2rem;
    }

    & svg {
      color: var(--font-color-2);
      font-size: 1rem;

      @media only screen and (max-width: 600px) {
        font-size: 75%;
      }
    }
  }
`;

export const Reviews = styled.section`
  height: 60%;
  border: 3px solid #eee;
  padding: 1rem;

  @media only screen and (max-width: 600px) {
    padding: 0.5rem;
  }

  & span {
    display: block;
    text-align: center;
    font-weight: 500;
  }

  .reviews {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
    height: 100%;
    padding: 1rem;

    @media only screen and (max-width: 600px) {
      column-gap: 0.3rem;
      padding: 1rem;
    }

    .review {
      background-color: #eee;
      display: grid;
      align-items: center;
      justify-items: center;

      &-img {
        background: #aaa;
        width: 90%;
        height: 80%;
      }
      &-heading {
        width: 80%;
        height: 20%;
        background: #aaa;
      }
    }
  }
`;

export const Contact = styled.div<{ advanced: boolean; isMap: boolean }>`
  min-height: 50%;
  border: 3px solid #eee;
  display: grid;
  grid-template-columns: ${({ isMap }) => (isMap ? 'repeat(2, 1fr)' : '.6fr')};
  justify-content: center;
  column-gap: 1rem;

  @media only screen and (max-width: 600px) {
    column-gap: 0.4rem;
  }

  .contact-map {
    background-color: #d9ffec;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.343 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413 7.07-7.07 7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%231ce783' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
    font-size: 3rem;
    font-weight: bold;
    color: #aaa;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contact-form {
    display: grid;
    align-items: center;
    grid-auto-rows: 20%;
    padding: 0 3%;

    &__heading {
      display: flex;
      align-items: center;
      font-size: 85%;
      justify-content: space-between;

      @media only screen and (max-width: 600px) {
        font-size: 65%;
      }
    }

    &__input {
      width: 100%;
      height: ${({ advanced }) => (advanced ? '60%' : '50%')};
      border: 2px solid #777;
      border-radius: ${({ advanced }) => (advanced ? '20px' : '0')};
      background: ${({ advanced }) =>
        advanced ? 'linear-gradient(0deg, #ccc, #fff)' : '#fff'};

      &:hover {
        background: ${({ advanced }) => (advanced ? '#eee' : '#fff')};
      }
    }

    &__button {
      width: 40%;
      height: 50%;
      background: ${({ advanced }) =>
        advanced
          ? 'linear-gradient(0deg,#26915c,var(--color-primary))'
          : 'var(--color-primary)'};
      justify-self: end;
      border-radius: 5%;
    }
  }
`;
