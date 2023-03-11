import styled from 'styled-components';

export const StyledAvatar = styled.img`
  border-radius: 50%;

  width: ${({ width }) => width || '2.5rem'};
  height: ${({ height }) => height || '2.5rem'};
`;
