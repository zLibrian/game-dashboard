import styled from 'styled-components';

export const StyledRightAside = styled.aside`
  grid-area: right-aside;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const StyledFrindsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    p {
      font-size: 0.875rem;
    }

    span {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`;

export const StyledFrindsSection = styled.section`
  & + section {
    margin-top: 2rem;
  }
`;

export const StyledChatSection = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 1.75rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: linear-gradient(
    98.47deg,
    rgba(0, 0, 0, 0.15) 19.23%,
    rgba(0, 0, 0, 0) 90.79%
  );

  filter: drop-shadow(0px 0px 25px rgba(255, 255, 255, 0.25));
  border-radius: 1.2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    span {
      font-size: 0.875rem;
    }
  }

  div.sendButton {
    box-shadow: 0px 4px 25px rgba(255, 249, 249, 0.25);
    border-radius: 255px;
    background-color: ${({ theme }) => theme.colors.blue};
    padding: 0.75rem;
  }

  .phoneIcon {
    margin-right: 0.75rem;
  }
`;
