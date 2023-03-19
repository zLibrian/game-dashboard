import styled from 'styled-components';

export const StyledMainBanner = styled.section`
  grid-area: main-banner;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 1rem 2.5rem;
  border-radius: 1rem;
  background: radial-gradient(
    circle,
    rgba(83, 83, 83, 0.2) 0%,
    rgba(250, 14, 14, 0.08) 100%
  );

  img {
    width: 300px;
  }
`;

export const StyledGameInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  > span {
    background-color: #ff5f5f;
    color: #fff;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 0.8rem;
    font-weight: 700;
  }

  p {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: left;
  }

  div {
    display: flex;
    align-items: center;
    background: rgba(217, 217, 217, 0.15);
    border-radius: 0.5rem;

    p {
      font-size: 1rem;
      padding: 0 1rem;

      span {
        font-size: 0.7rem;
      }
    }
  }
`;
