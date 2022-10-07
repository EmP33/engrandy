import React from 'react';
import { PrimaryButtonStyle } from './Utils.styles';

interface IProps {
  text: string;
  dark?: boolean;
  type?: string;
}

const PrimaryButton: React.FC<IProps> = ({ text, dark, type = 'button' }) => {
  return (
    <PrimaryButtonStyle dark={dark} type={type}>
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
