import React from 'react';
import { Wrapper } from './SummaryDialog.styles';
import { IoMdClose } from 'react-icons/io';
import { useTranslation } from 'gatsby-plugin-react-i18next';

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
  const { t } = useTranslation();

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
          <h2>{t('Configuration Summary')}</h2>
          <IoMdClose onClick={hideSummary} />
        </div>
        <div className="details__content">
          <ul>
            <li>
              {t('Selected package')}: {t(pack)}
            </li>
            <li>
              {t('Selected animations')}: {t(animations)}
            </li>
            <li>
              {t('Contact form and map')}:{' '}
              {typeof contact === 'object'
                ? contact.map((el) => t(el)).join(', ')
                : t(contact)}
            </li>
            <li>
              {t('Additional Features')}:{' '}
              {functions && functions.length !== 0
                ? typeof functions === 'object'
                  ? functions.map((el) => t(el)).join(', ')
                  : t(functions)
                : t('No additional functions selected')}
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default SummaryDialog;
