import { StyledGameCard } from './styles';

type GameCard = {
  image: string;
  name: string;
  companyName: string;
  imageAlt: string;
};

export const GameCard = ({ image, name, companyName, imageAlt }: GameCard) => {
  return (
    <StyledGameCard>
      <img src={image} alt={imageAlt} />
      <p>{name}</p>
      <span>{companyName}</span>
    </StyledGameCard>
  );
};
