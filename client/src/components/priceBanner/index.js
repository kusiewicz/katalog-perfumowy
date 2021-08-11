import React from 'react';

import { Container, TextBanner } from './styles/priceBanner';

export default function Banner({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Banner.Text = function Text({ children, ...restProps }) {
  return <TextBanner {...restProps}>{children}</TextBanner>;
};
