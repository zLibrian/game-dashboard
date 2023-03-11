import { Header } from '../../components/Header';
import { Container, Content, LeftAside, RightAside } from './styles';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header />
      <LeftAside>Left Aside</LeftAside>
      <Content>{children}</Content>
      <RightAside>Right Aside</RightAside>
    </Container>
  );
}
