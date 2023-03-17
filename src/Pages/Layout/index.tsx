import { Header } from '../../components/Header';
import { LeftAside } from '../../components/LeftAside';
import { RightAside } from '../../components/RightAside';
import { Container, Content } from './styles';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      <LeftAside />
      <Content>{children}</Content>
      <RightAside />
    </Container>
  );
}
