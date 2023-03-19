import { MainBanner } from '../../components/MainBanner';
import { StyledHome } from './styles';

export default function Home() {
  return (
    <StyledHome>
      <MainBanner />
      <div
        style={{
          backgroundColor: 'red',
          gridArea: 'most-played',
        }}></div>
      <div
        style={{
          backgroundColor: 'green',
          gridArea: 'my-games',
        }}></div>
    </StyledHome>
  );
}
