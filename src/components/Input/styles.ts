import styled from 'styled-components';

export const StyledInputContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  padding: 0.5rem;
  width: 100%;
  max-width: 17rem;

  background-color: ${({ theme }) => theme.colors.gray};
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  margin-left: 0.5rem;
  width: 100%;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;
