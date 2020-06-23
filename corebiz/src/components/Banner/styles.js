import styled from 'styled-components';

export const Container = styled.div`
  position: abolute;
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 430px;
  justify-content: center;
  width: 100%;
  background: #f6f6;
`;

export const Content = styled.div`
  max-width: 1350px;
  max-height: 430px;
  background: yellow;

  .banner {
    max-height: 430px;
    overflow: hidden;
    position: relative;
  }
  .banner_black {
    max-height: 430px;
    position: absolute;
    display: flex;
    align-items: right;
    justify-content: left;
    z-index: 5;
  }

  .banner_text {
    position: absolute;
    color: #fff;
  }

  .banner_black_overflow {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 675px;
    max-height: 430px;
  }

  .banner_image {
    background-image: url('banner_img.png');

    img {
      width: 100%;
      max-height: 430px;
      height: 100%;
    }
  }
`;
