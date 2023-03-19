import chrizard from '../../assets/charizard.png';
import { Button } from '../Button';
import { StyledGameInfo, StyledMainBanner } from './styles';

export const MainBanner = () => {
  return (
    <StyledMainBanner>
      <StyledGameInfo>
        <span>RPG</span>
        <p>
          Pokemon <br />
          Scarlet and Violet
        </p>

        <div>
          <p>
            <span>R$: </span>
            299,90
          </p>
          <Button>Comprar</Button>
        </div>
      </StyledGameInfo>
      <img src={chrizard} alt="" />
    </StyledMainBanner>
  );
};
