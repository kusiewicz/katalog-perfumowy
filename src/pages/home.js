import React from 'react';
import { HeaderContainer } from '../containers/header';
import { MenuContainer } from '../containers/menu';
import { useScrollDirection } from '../hooks';

export default function Home() {
  useScrollDirection();
  return (
    <>
      <HeaderContainer />
      <MenuContainer />
    </>
  );
}
