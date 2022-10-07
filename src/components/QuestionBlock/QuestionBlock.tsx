import { useState } from 'react';
import { Wrapper } from './QuestionBlock.styles';
import { BiChevronDown } from 'react-icons/bi';
import { useTranslation } from 'gatsby-plugin-react-i18next';

interface IProps {
  question: string;
  answer: string;
}

const QuestionBlock: React.FC<IProps> = ({ question, answer }) => {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Wrapper showDetails={showDetails}>
      <div
        className="question-answer"
        onClick={() => setShowDetails((prev) => !prev)}
      >
        <h3>{t(question)}</h3>
        <BiChevronDown />
      </div>
      <div className="hidden-content">{t(answer)}</div>
    </Wrapper>
  );
};

export default QuestionBlock;
