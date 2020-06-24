import React, { useState, useEffect } from 'react';

import { MdStar, MdStarBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import arrowLeft from '../../assets/images/arrowLeft.svg';
import arrowRight from '../../assets/images/arrowRight.svg';
import api from '../../services/api';
import { getQuantity, getValue, getAllStars } from '../../utils';
import { formatPrice } from '../../utils/format';

import { Container, Content } from './styles';

function Products() {
  const [products, setProducts] = useState([]);
  const selector = useSelector((state) => state + 1);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const response = await api.get('');
      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price / 100),
      }));
      setProducts(data);
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
      >{`de R$ ${formatPrice(product.listPrice / 100)}`}</p>
    );
  }
  function getInstallments(product) {
    if (product.installments.length === 0) {
      return <p style={{ visibility: 'hidden' }}>underfined</p>;
    }
    return (
      <p>
        {`ou em ${getQuantity(product)}x de R$ ${formatPrice(
          getValue(product) / 100
        )} `}
      </p>
    );
  }
  function handleAddtocart() {
    dispatch({ type: 'INCREMENT' });
    localStorage.setItem('@valueCart', selector);
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
                    <div style={{ position: 'relative' }}>
                      <div className="off_div">
                        <span className="list_product_off">
                          <p>OFF</p>
                        </span>
                      </div>
                    </div>
                  ) : null}

                  <img src={product.imageUrl} alt={product.productName} />

                  <div className="list_down_title">
                    <span>{product.productName}</span>
                  </div>
                  <div className="list_down_stars">
                    <span>
                      {getAllStars(product.stars, MdStar, MdStarBorder)}
                    </span>
                  </div>
                  <div className="list_down_price">
                    {getListPrice(product)}
                    <span>{`por ${product.priceFormatted}`}</span>
                    {getInstallments(product)}
                  </div>
                  <div className="list_down_button">
                    <button type="button" onClick={handleAddtocart}>
                      COMPRAR
                    </button>
                  </div>
                </li>
                <div className="banner_li">
                  <span style={{ background: '#f8475f' }} />
                  <span />
                  <span />
                  <span />
                </div>
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
