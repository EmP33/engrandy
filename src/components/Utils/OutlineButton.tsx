import React from 'react';
import { OutlineButtonStyle } from './Utils.styles';

interface IProps {
  text: string;
}

const OutlineButton: React.FC<IProps> = ({ text }) => {
  return (
    <OutlineButtonStyle>
      <div>
        <div>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>
    </OutlineButtonStyle>
  );
};

export default OutlineButton;
