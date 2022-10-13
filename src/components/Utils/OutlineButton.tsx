import { Link } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { OutlineButtonStyle } from './Utils.styles';

interface IProps {
  text: string;
  link: string;
}

const OutlineButton: React.FC<IProps> = ({ text, link }) => {
  return (
    <OutlineButtonStyle>
      <Link to={link || '/'}>
        <div className="wrapper">
          <div className="inside-wrapper">
            <span>{text}</span>
            <span>{text}</span>
          </div>
        </div>
      </Link>
    </OutlineButtonStyle>
  );
};

export default OutlineButton;
