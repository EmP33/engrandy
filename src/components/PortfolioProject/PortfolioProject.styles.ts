import styled from 'styled-components';

export const Wrapper = styled.div<{ link: string }>`
  border-radius: 10px;
  overflow: hidden;
  -webkit-box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  cursor: pointer;

  &:hover {
    filter: brightness(80%);
  }

  & img {
    width: 100%;
    height: 100%;
  }
`;
