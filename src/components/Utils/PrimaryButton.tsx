import { Link } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { PrimaryButtonStyle } from './Utils.styles';

interface IProps {
  text: string;
  dark?: boolean;
  type?: string;
  link?: string;
  handleClick?: () => void;
  disabled?: boolean;
}

const PrimaryButton: React.FC<IProps> = ({
  text,
  dark,
  type = 'button',
  link,
  handleClick,
  disabled,
}) => {
  return (
    <PrimaryButtonStyle
      disabled={disabled}
      dark={dark}
      type={type}
      onClick={handleClick}
    >
      {link ? (
        <Link to={link || '/'}>
          <div className="wrapper">
            <div className="inside-wrapper">
              <span>{text}</span>
              <span>{text}</span>
            </div>
          </div>
        </Link>
      ) : (
        <div className="wrapper">
          <div className="inside-wrapper">
            <span>{text}</span>
            <span>{text}</span>
          </div>
        </div>
      )}
    </PrimaryButtonStyle>
  );
};

export default PrimaryButton;
