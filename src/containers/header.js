import React from 'react';
import { Header } from '../components';

export function HeaderContainer() {
  return (
    <Header>
      <Header.TextWrapper>
        <Header.Text>katalog perfumowy</Header.Text>
        <Header.TextLink href="https://www.wykop.pl/tag/perfumy/">
          wykop.pl/tag/perfumy
        </Header.TextLink>
      </Header.TextWrapper>
      <Header.Arrow />
    </Header>
  );
}
