import { Header } from '../../components/Header';
import { LeftAside } from '../../components/LeftAside';
import { Container, Content, RightAside } from './styles';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      <LeftAside />
      <Content>{children}</Content>
      <RightAside>Right Aside</RightAside>
    </Container>
  );
}
