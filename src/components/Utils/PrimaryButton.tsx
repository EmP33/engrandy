import { Link } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { PrimaryButtonStyle } from './Utils.styles';

interface IProps {
  text: string;
  dark?: boolean;
  type?: string;
  link: string;
}

const PrimaryButton: React.FC<IProps> = ({
  text,
  dark,
  type = 'button',
  link,
}) => {
  return (
    <PrimaryButtonStyle dark={dark} type={type}>
      <Link to={link || '/'}>
        <div className="wrapper">
          <div className="inside-wrapper">
            <span>{text}</span>
            <span>{text}</span>
          </div>
        </div>
      </Link>
    </PrimaryButtonStyle>
  );
};

export default PrimaryButton;
