import { MainBanner } from '../../components/MainBanner';
import { MostPlayed } from '../../components/MostPlayed';
import { StyledHome } from './styles';

export default function Home() {
  return (
    <StyledHome>
      <MainBanner />
      <MostPlayed />
      <MostPlayed />
    </StyledHome>
  );
}
