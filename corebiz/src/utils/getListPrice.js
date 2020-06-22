import React from 'react';

function getListPrice(product) {
  if (product.listPrice === null) {
    return <p style={{ visibility: 'hidden' }}>underfined</p>;
  }
}

export default getListPrice;
