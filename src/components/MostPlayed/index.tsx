import { gameData } from '../../data';
import { GameCard } from '../GameCard';
import { StyledGameList, StyledMostPlayed } from './styles';

export const MostPlayed = () => {
  return (
    <StyledMostPlayed>
      <p>Os mais jogados</p>
      <StyledGameList>
        {gameData.map(({ name, company, image }) => (
          <GameCard
            key={name}
            name={name}
            companyName={company}
            image={image}
            imageAlt={name}
          />
        ))}
      </StyledGameList>
    </StyledMostPlayed>
  );
};
