import styled, { keyframes } from 'styled-components';

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

  @media (max-height: 28rem) {
    top: -4rem;
  }
`;

export const Text = styled.h1`
  font-size: 2.3rem;
  font-weight: 700;
  position: relative;
  margin-bottom: 10px;
  font-family: Sansita Swashed;

  @media (min-width: 57rem) {
    font-size: 3.5rem;
  }
`;

export const TextLink = styled.a`
  color: black;
  font-weight: 400;
  position: absolute;
  font-family: Sansita Swashed;

  &:hover {
    color: #aca7a7;
  }

  @media (min-width: 57rem) {
    font-size: 1.5rem;
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
  cursor: pointer;

  @media (max-height: 28rem) {
    top: -3rem;
  }
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
