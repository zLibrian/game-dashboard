import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 1rem;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 0.75fr 3fr 1.25fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'left-aside header header'
    'left-aside content right-aside';
`;

export const LeftAside = styled.div`
  grid-area: left-aside;
`;

export const Content = styled.main`
  background-color: transparent;
  grid-area: content;
`;

export const RightAside = styled.div`
  background-color: transparent;
  grid-area: right-aside;
`;
