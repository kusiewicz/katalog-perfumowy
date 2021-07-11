import { React } from 'react';

import { Container, Banner } from './styles/catalog';

export default function Catalog({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Catalog.Banner = function CatalogBanner({ children, ...restProps }) {
  return <Banner {...restProps}>{children}</Banner>;
};
