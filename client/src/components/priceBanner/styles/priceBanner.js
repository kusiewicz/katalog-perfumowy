import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  border-radius: 20px;
  z-index: 40;
  transition: all 250ms;
  ${({ invisible }) =>
    invisible &&
    css`
      opacity: 0;
      pointer-events: none;
    `}

  @media (min-width: 60rem) {
    width: 90%;
  }
`;

export const TextBanner = styled.div`
  text-align: center;
  width: 100%;
  height: 90px;
  padding: 1.5rem;
  position: fixed;
  font-family: Quicksand;
  font-weight: 600;
  left: 0;
  top: 90px;
  color: black;
  font-size: 3rem;

  h1 {
    margin: 0;
    madding: 0;
  }

  @media (min-width: 34rem) and (max-width: 60rem) {
    font-size: 4rem;
  }

  @media (min-width: 60rem) {
    font-size: 6rem;
  }
`;
