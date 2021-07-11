import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  border-radius: 20px;
  z-index: 40;
`;

export const Banner = styled.div`
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
  transition: all 250ms;

  h1 {
    margin: 0;
    madding: 0;
  }
`;
