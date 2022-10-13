import React from 'react';
import { Wrapper } from './SummaryDialog.styles';
import { IoMdClose } from 'react-icons/io';

interface IProps {
  hideSummary: () => void;
  configuration: {
    pack: string;
    animations: string;
    contact: string | string[];
    functions: string | string[];
  };
}

const SummaryDialog: React.FC<IProps> = ({ hideSummary, configuration }) => {
  const { pack, animations, contact, functions } = configuration;
  return (
    <Wrapper onClick={hideSummary}>
      <div
        className="details"
        data-aos="fade-down"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="details__heading">
          <h2>Podsumowanie konfiguracji</h2>
          <IoMdClose onClick={hideSummary} />
        </div>
        <div className="details__content">
          <ul>
            <li>Wybrana paczka: {pack}</li>
            <li>Wybrane animacje: {animations}</li>
            <li>Formularz kontaktowy lub mapa: {contact}</li>
            <li>Dodatkowe funkcje: {functions.join(', ')}</li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default SummaryDialog;
