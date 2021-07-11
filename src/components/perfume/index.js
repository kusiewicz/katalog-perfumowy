import React from 'react';
import {
  Container,
  PerfumeItem,
  Name,
  Brand,
  FilterWrapper,
  Filter,
  Image,
  Description,
  Link,
} from './styles/perfume';

export default function Perfume({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <PerfumeItem>{children}</PerfumeItem>
    </Container>
  );
}

Perfume.Name = function PerfumeName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Perfume.Brand = function PerfumeBrand({ children, ...restProps }) {
  return <Brand {...restProps}>{children}</Brand>;
};

Perfume.FilterWrapper = function PerfumeFilterWrapper({ children, ...restProps }) {
  return <FilterWrapper {...restProps}>{children}</FilterWrapper>;
};

Perfume.Filter = function PerfumeFilter({ children, ...restProps }) {
  return <Filter {...restProps}>{children}</Filter>;
};

Perfume.Image = function PerfumeImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Perfume.Description = function PerfumeDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Perfume.Link = function PerfumeLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
