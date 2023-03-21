import styled from 'styled-components';

export const StyledGameCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0.5rem;

  img {
    width: 250px;
    border-radius: 1rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1rem;
  }

  span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
