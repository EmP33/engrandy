import styled from 'styled-components';

export const Wrapper = styled.div<{ slide: number }>`
  width: 100%;
  padding: 0.5rem 0;
  height: 60%;
  overflow: hidden;

  .slides {
    display: flex;
    height: 100%;
    transition: all 1s ease-in-out;
    transform: ${({ slide }) =>
      slide === 1
        ? 'translateX(-100%)'
        : slide === 2
        ? 'translateX(-200%)'
        : 'translateX(0%)'};

    .slide {
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ccc;
      color: #999;
      flex-shrink: 0;
      margin: 0 5%;
      font-size: 2.4rem;
      font-weight: bold;
    }
  }
`;
