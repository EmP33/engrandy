import Map from '@/assets/Map';
import PrimaryButton from '../Utils/PrimaryButton';
import OutlineButton from '../Utils/OutlineButton';
// Styles
import { Wrapper } from './HeroSection.styles';
import Hero from '@/assets/Hero';

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="hero-content">
        <div className="hero-content__heading">
          <span>Engrandy</span>
          <h1>
            Stwórz <span>profesjonalną stronę internetową</span> w promocyjnej
            cenie
          </h1>
          <h2>
            Sprawdź nasz kreator, aby dowiedzieć się wszystkiego o kosztach
            wykonania twojego projektu
          </h2>
          <div className="heading-actions">
            <PrimaryButton text="Skontaktuj się z nami" />
            <OutlineButton text="Przejdź do kreatora" />
          </div>
        </div>
        <div className="hero-content__image">
          <Hero />
        </div>
      </div>
      <Map />
    </Wrapper>
  );
};

export default HeroSection;
