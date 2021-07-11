/* eslint-disable no-else-return */
import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  width: 100%;
  height: 100vh;
`;

export const Wrapper = styled.div`
  height: 60%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

export const Frame = styled.div``;

export const Text = styled.h2`
  font-size: 1.5rem;
  font-family: Sansita Swashed;
`;

export const Selection = styled.div`
  text-align: center;
  margin: 1.2rem 0;
  font-size: 1rem;
  font-weight: 300;
`;

export const Label = styled.label`
  padding: 0.25rem;
  border-radius: 5px;
`;

export const Input = styled.input`
  display: none;

  &:hover,
  &:checked {
    + label {
      ${({ name, value }) => {
        if (name === 'category-radio') {
          return 'border: 2px solid gold; box-shadow: 1px 1px 10px 0px gold;';
        } else if (name === 'sex-radio' && value === 'female') {
          return 'border: 2px solid rgb(231, 44, 203); box-shadow: 1px 1px 10px 0px rgb(225, 143, 236);';
        } else {
          return 'border: 2px solid rgb(17, 61, 164); box-shadow: 1px 1px 10px 0px rgb(31, 165, 218);';
        }
      }}
`;

export const ButtonLink = styled(ReactRouterLink)`
  width: 10rem;
  --scale: 0;
  padding: 0.5rem;
  background-color: rgb(35, 158, 10);
  border: none;
  color: white;
  border-radius: 3px;
  outline: none;
  font-family: inherit;
  font-weight: 600;
  font-size: 1.2rem;
  box-shadow: 1px 1px 5px green;
  border: 1px solid rgb(35, 158, 10);
  position: relative;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: rgb(35, 158, 10);
    border: 1px solid rgb(35, 158, 10);
    box-shadow: 1px 1px 10px 0px green;
    background-color: white;
  }

  &::before,
  &::after {
    --tooltip-color: rgb(202, 67, 67);
    --arrow-size: 10px;
    --translate-x: -25%;

    position: absolute;
    bottom: -0.25rem;
    left: 50%;
    background: black;
    ${({ scale }) => `
    transform: translateX(var(--translate-x, 0)) translateY(var(--translate-y, 0))
      scale(${scale});`}
    transition: 150ms transform;
    transform-origin: top center;
  }

  &:before {
    --translate-y: calc(150% - var(--arrow-size));

    content: attr(data-tooltip);
    color: white;
    padding: 0.5rem;
    width: max-content;
    font-size: 0.8rem;
    background-color: var(--tooltip-color);
    border-radius: 5px;
    text-align: center;
  }

  &::after {
    --translate-y: var(--arrow-size);
    content: '';
    background-color: transparent;
    border: var(--arrow-size) solid transparent;
    border-bottom-color: var(--tooltip-color);
  }
`;
