import React from 'react';
import { PrimaryButtonStyle } from './Utils.styles';

interface IProps {
  text: string;
}

const PrimaryButton: React.FC<IProps> = ({ text }) => {
  return (
    <PrimaryButtonStyle>
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
