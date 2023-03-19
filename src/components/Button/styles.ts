import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 1px 25px rgba(255, 249, 249, 0.25);
`;
