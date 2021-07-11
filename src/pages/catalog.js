import React from 'react';
import { CatalogContainer } from '../containers/catalog';

export default function Catalog({ price, sex }) {
  return <CatalogContainer price={price} sex={sex} />;
}
