import React from 'react';
import { PrimaryButtonStyle } from './Utils.styles';

interface IProps {
  text: string;
  dark?: boolean;
}

const PrimaryButton: React.FC<IProps> = ({ text, dark }) => {
  return (
    <PrimaryButtonStyle dark={dark}>
      <div>
        <div>
          <span>{text}</span>
          <span>{text}</span>
        </div>
      </div>
    </PrimaryButtonStyle>
  );
};

export default PrimaryButton;
