import React, { useState } from 'react';
import {
  Container,
  BackButton,
  FilterBarPanel,
  FilterGroup,
  FilterImage,
  FilterImageBox,
} from './styles/navBar';

export default function NavBar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

NavBar.BackButton = function NavBarBackButton({ children, ...restProps }) {
  return <BackButton {...restProps}>{children}</BackButton>;
};

NavBar.FilterBarPanel = function NavBarFilterBarPanel({ children, ...restProps }) {
  return <FilterBarPanel {...restProps}>{children}</FilterBarPanel>;
};

NavBar.FilterGroup = function NavBarFilterGroup({ children, ...restProps }) {
  return <FilterGroup {...restProps}>{children}</FilterGroup>;
};

NavBar.FilterImageBox = function NavBarFilterImageBox({ children, ...restProps }) {
  return <FilterImageBox {...restProps}>{children}</FilterImageBox>;
};

NavBar.FilterButton = function NavBarFilterImage({ children, value, ...restProps }) {
  return (
    <FilterImageBox {...restProps}>
      <FilterImage src={`/images/${value}.png`} />
    </FilterImageBox>
  );
};
