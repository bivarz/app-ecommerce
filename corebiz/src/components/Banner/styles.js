import styled from 'styled-components';

export const Container = styled.div`
  position: abolute;
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 430px;
  justify-content: center;
  width: 100%;
  background: #000000;

  .banner_black_overflow {
    width: 100%;
    max-width: 1920px;
    height: 430px;
    overflow: hidden;
  }

  .banner_black {
    display: flex;
    align-items: right;
    justify-content: right;
  }

  figure {
    position: relative;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
