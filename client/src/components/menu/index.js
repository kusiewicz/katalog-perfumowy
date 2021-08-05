import React from 'react';

import {
  Container,
  Wrapper,
  Frame,
  Text,
  Selection,
  Input,
  Label,
  ButtonLink,
} from './styles/menu';

export default function Menu({ children, ...restProps }) {
  return (
    <Container>
      <Wrapper {...restProps}>{children}</Wrapper>
    </Container>
  );
}

Menu.Frame = function MenuFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Menu.Text = function MenuText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Menu.Selection = function MenuSelection({ children, ...restProps }) {
  return <Selection {...restProps}>{children}</Selection>;
};

Menu.Input = function MenuInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Menu.Label = function MenuLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

Menu.ButtonLink = function MenuButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
