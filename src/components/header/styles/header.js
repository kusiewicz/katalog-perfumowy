import styled, { keyframes } from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  text-align: center;
`;

export const TextWrapper = styled.div`
  position: relative;
`;

export const Text = styled.h1`
  font-size: 2.3rem;
  font-weight: 700;
  position: relative;
  margin-bottom: 10px;
  font-family: Sansita Swashed;
`;

export const TextLink = styled.a`
  color: black;
  font-weight: 400;
  position: absolute;
  font-family: Sansita Swashed;

  &:hover {
    color: #aca7a7;
  }
`;

const animate = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const ArrowWrapper = styled.div`
  position: relative;
  top: 12vh;
  cursor: pointer;
`;

export const Arrow = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  border-bottom: 2px solid #000;
  border-right: 2px solid #000;
  transform: rotate(45deg);
  margin: -10px;
  animation: ${animate} 2s infinite;

  &:nth-child(2) {
    animation-delay: -0.2s;
  }

  &:nth-child(3) {
    animation-delay: -0.4s;
  }
`;
