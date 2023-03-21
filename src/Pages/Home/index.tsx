import { MainBanner } from '../../components/MainBanner';
import { MostPlayed } from '../../components/MostPlayed';
import { StyledHome } from './styles';

export default function Home() {
  return (
    <StyledHome>
      <MainBanner />
      <MostPlayed />
      <div
        style={{
          backgroundColor: 'green',
          gridArea: 'my-games',
        }}></div>
    </StyledHome>
  );
}
