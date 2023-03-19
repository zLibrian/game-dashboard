import styled from 'styled-components';

export const StyledHome = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.75fr 1fr;
  grid-template-areas: 'main-banner' 'most-played' 'my-games';
  grid-gap: 0.5rem;
`;
