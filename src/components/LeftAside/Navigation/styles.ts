import styled from 'styled-components';

export const StyledAsideNav = styled.nav`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

export const StyledAsideNavLink = styled.a`
  padding: 0.9rem 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.active {
    color: #fff;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
