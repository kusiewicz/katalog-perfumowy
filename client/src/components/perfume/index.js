import React from 'react';
import {
  Container,
  PerfumeItem,
  Name,
  Brand,
  FilterWrapper,
  Filter,
  FilterIcon,
  Image,
  Description,
  Link,
} from './styles/perfume';

export default function Perfumes({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Perfumes.Perfume = function PerfumePerfume({ children, ...restProps }) {
  return <PerfumeItem {...restProps}>{children}</PerfumeItem>;
};

Perfumes.Name = function PerfumeName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Perfumes.Brand = function PerfumeBrand({ children, ...restProps }) {
  return <Brand {...restProps}>{children}</Brand>;
};

Perfumes.FilterWrapper = function PerfumeFilterWrapper({ children, ...restProps }) {
  return <FilterWrapper {...restProps}>{children}</FilterWrapper>;
};

Perfumes.Filter = function PerfumeFilter({ children, ...restProps }) {
  return <Filter {...restProps}>{children}</Filter>;
};

Perfumes.FilterIcon = function PerfumeFilterIcon({ children, season }) {
  return <FilterIcon src={`/images/${season}.png`}>{children}</FilterIcon>;
};

Perfumes.Image = function PerfumeImage({ src }) {
  return (
    <Image>
      <img src={src} alt="" />
    </Image>
  );
};

Perfumes.Description = function PerfumeDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Perfumes.Link = function PerfumeLink({ children, url, ...restProps }) {
  return (
    <Link href={url} {...restProps}>
      {children}
    </Link>
  );
};
