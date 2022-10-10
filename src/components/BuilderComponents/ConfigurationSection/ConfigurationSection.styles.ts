import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 2rem;
  background-color: #fff;
  -webkit-box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 3px 3px 7px 0px rgba(0, 0, 0, 0.25);

  & h2 {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  & .content {
    display: grid;
    row-gap: 1rem;

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
    }

    label input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      border-radius: 50%;
      background-color: #eee;
    }

    label:hover input ~ .checkmark {
      background-color: #ccc;
    }

    label input:checked ~ .checkmark {
      background-color: var(--color-primary);
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
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    .name {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & svg {
        font-size: 1.4rem;

        &:hover {
          color: var(--color-primary);
        }
      }
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
