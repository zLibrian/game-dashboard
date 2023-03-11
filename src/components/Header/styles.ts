import styled from 'styled-components';

export const StyledHeader = styled.header`
  grid-area: header;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;
