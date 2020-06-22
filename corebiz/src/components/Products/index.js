import React, { useState, useEffect } from 'react';

/* import { MdStar, MdStarBorder } from 'react-icons/md'; */
import arrowLeft from '../../assets/images/arrowLeft.svg';
import arrowRight from '../../assets/images/arrowRight.svg';
import api from '../../services/api';
import { getNumbers, getQuantity, getValue } from '../../utils';

import { Container, Content } from './styles';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await api.get('');
      setProducts(response.data);
    }
    getData();
  }, []);

  function getListPrice(product) {
    if (product.listPrice === null) {
      return <p style={{ visibility: 'hidden' }}>underfined</p>;
    }
    return (
      <p
        style={{ textDecoration: 'line-through', fontFamily: 'Nunito' }}
      >{`de R$ ${getNumbers(product.listPrice)}`}</p>
    );
  }
  function getInstallments(product) {
    if (product.installments.length === 0) {
      return <p style={{ visibility: 'hidden' }}>underfined</p>;
    }
    return (
      <p>
        {`ou em ${getQuantity(product)}x de R$ ${getNumbers(
          getValue(product)
        )} `}
      </p>
    );
  }

  return (
    <Container>
      <Content>
        <div className="title">
          <p>Mais Vendidos </p>
          <span className="title_line" />
        </div>

        <div className="content_left">
          <button type="button" className="buttons">
            <img src={arrowLeft} alt="arrowL" />
          </button>
        </div>

        <div className="content_middle">
          <div className="content_middle_itens">
            {/* start  */}
            {products.map((product) => (
              <div key={product.productName} className="div_li">
                <li>
                  {product.listPrice ? (
                    <div className="off_div">
                      <span className="list_product_off">
                        <p>OFF</p>
                      </span>
                    </div>
                  ) : null}

                  <img src={product.imageUrl} alt={product.productName} />

                  <div className="list_down_title">
                    <span>{product.productName}</span>
                  </div>
                  <div className="list_down_stars">
                    <span>{product.stars}</span>
                  </div>
                  <div className="list_down_price">
                    {getListPrice(product)}
                    <span>por R$ {getNumbers(product.price)}</span>
                    {getInstallments(product)}
                  </div>
                  <div className="list_down_button">
                    <button type="button">COMPRAR</button>
                  </div>
                </li>
              </div>
            ))}
          </div>
        </div>

        <div className="content_right">
          <button type="button" className="buttons">
            <img src={arrowRight} alt="arrowL" />
          </button>
        </div>
      </Content>
    </Container>
  );
}

export default Products;
