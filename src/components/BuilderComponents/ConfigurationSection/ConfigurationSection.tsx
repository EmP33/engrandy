import React from 'react';
import { Wrapper } from './ConfigurationSection.styles';

interface IProps {
  sectionID: string;
  title: string;
  children: any;
}

const ConfigurationSection: React.FC<IProps> = ({
  children,
  sectionID,
  title,
}) => {
  return (
    <Wrapper id={sectionID}>
      <h2>{title}</h2>
      <div className="content">{children}</div>
    </Wrapper>
  );
};

export default ConfigurationSection;
