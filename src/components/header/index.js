import React from 'react';
import SmoothScroll from 'smooth-scroll';
import { Container, TextWrapper, Text, TextLink, ArrowWrapper, Arrow } from './styles/header';

const scroll = new SmoothScroll(null, {
  speed: 800,
});

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.TextWrapper = function HeaderTextWrapper({ children, ...restProps }) {
  return <TextWrapper {...restProps}>{children}</TextWrapper>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Header.Arrow = function HeaderArrow({ ...restProps }) {
  return (
    <ArrowWrapper {...restProps} onClick={() => scroll.animateScroll(2000)}>
      <Arrow />
      <Arrow />
      <Arrow />
    </ArrowWrapper>
  );
};
