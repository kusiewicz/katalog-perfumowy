import React from 'react';
import { CatalogContainer } from '../containers/catalog';

export default function Catalog({ price }) {
  return (
    <>
      <CatalogContainer price={price} />
    </>
  );
}
