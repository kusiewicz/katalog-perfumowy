import styled, { css } from 'styled-components';
import { ArrowLeft } from '@styled-icons/entypo/ArrowLeft';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 60;
  padding: 0.5rem;
`;

export const BackButton = styled(ArrowLeft)``;

export const FilterBarPanel = styled.div`
  height: 170px;
  display: flex;
  justify-content: space-between;
  transition: all 500ms;
  ${({ invisible }) =>
    invisible &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
`;

export const FilterGroup = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FilterImageBox = styled.li`
  height: 45px;
  width: 45px;
  margin: 0 0.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 5px #000000;
  border-radius: 10px;
  position: relative;
  background-color: white;
  opacity: 0.9;

  ${({ active }) =>
    active &&
    css`
      bottom: -3px;
      box-shadow: 0px 2px 2px #050505;
    `}

  @media (min-width: 60rem) {
    height: 55px;
    width: 55px;
  }
`;

export const FilterImage = styled.img`
  width: 80%;
  height: 80%;
`;
