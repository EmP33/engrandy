import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 2rem;
  background-color: #fff;
  -webkit-box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.25);

  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }

  @media only screen and (max-width: 450px) {
    padding: 1rem 0.5rem;
  }

  & h2 {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 1rem;

    @media only screen and (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  & .content {
    display: grid;
    row-gap: 1rem;

    & .configuration-element {
      display: grid;
      grid-template-columns: 1fr max-content;

      & svg {
        font-size: 1.4rem;
        cursor: pointer;

        &:hover {
          color: var(--color-primary);
        }
      }
    }

    label {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 1.1rem;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      @media only screen and (max-width: 600px) {
        padding-left: 32.5px;
      }
    }

    label input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    input[type='radio'] ~ .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      border-radius: 50%;
      background-color: #eee;
    }

    input[type='checkbox'] ~ .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      border-radius: 5px;
      background-color: #eee;
    }

    label:hover input ~ .checkmark {
      background-color: #ccc;
    }

    label input:checked ~ .checkmark {
      background-color: var(--color-secondary);
    }

    .checkmark:after {
      content: '';
      position: absolute;
      display: none;
    }

    label input:checked ~ .checkmark:after {
      display: block;
    }

    label .checkmark:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid var(--font-color-3);
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    .configuration-result {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;
    }

    .name {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .description {
      font-size: 0.8rem;
      display: block;
      margin: 0.2rem 0 0.4rem;
    }

    .price {
      display: block;
      font-weight: 500;
    }
    .summary-button {
      border: none;
      background-color: #fff;
      cursor: pointer;
      font-size: 1.15rem;
      display: flex;
      align-items: center;
      column-gap: 0.5rem;
      transition: all 0.2s ease-in;

      &:hover {
        column-gap: 0.15rem;
      }
    }
  }
`;
