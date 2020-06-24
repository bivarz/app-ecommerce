import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #fff;
  width: 100%;
  max-height: 501px;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  height: 501px;
  width: 100%;
  max-height: 501px;
  max-width: 1213.08px;
  justify-content: space-between;

  .title {
    position: absolute;
    width: 138px;
    height: 28px;
    margin-left: 42px;

    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 27px;
    color: #000;
    margin-top: 29px;
  }
  .title_line {
    position: absolute;
    width: 65px;
    height: 0px;
    border: 3px solid #c0c0c0;
    margin-top: 5px;
    margin-bottom: 20px;
    background: #c0c0c0;
  }

  .buttons {
    margin-top: 184px;
    background: none;
    border: none;

    height: 22px;
  }
  .content_left {
    display: flex;
    justify-content: center;
    margin-top: 79px;
    max-width: 19px;
  }
  .content_right {
    display: flex;
    justify-content: center;
    margin-top: 79px;
    max-width: 19px;
  }
  .content_middle {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 79px;
    margin-bottom: 69px;
    width: 100%;
    max-width: 1175.08px;
    max-height: 501px;
    list-style: none;

    .content_middle_itens {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 79px;
      margin-bottom: 69px;
      width: 100%;
      max-width: 1175.08px;
      max-height: 501px;
      list-style: none;
      margin-right: 20px;

      .list_down_stars {
        margin-top: 3px;
        margin-bottom: 3px;

        left: 100px;
        top: 232px;

        svg {
          color: #f8475f;
        }
      }
      .visible {
        visibility: hidden;
      }
      .list_down_price {
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        color: red;

        span {
          margin-top: 2px;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 25px;
          text-align: center;

          color: #000;
        }
        p {
          margin-top: 2px;
          font-style: normal;
          font-weight: normal;
          font-size: 11px;
          line-height: 15px;
          text-align: center;
          color: #7a7a7a;
        }
      }

      li {
        display: flex;
        align-items: center;
        flex-direction: column;

        margin-top: 20px;
        margin-left: 22px;
        width: 216px;
        max-width: 213px;
        min-width: 132px;
        height: 353px;
        transition: 0.5s ease;

        .div_list {
          width: 100%;
          max-width: 216px;
          min-width: 132px;
        }

        .off_div {
          position: relative;
          top: 0px;
          right: -24px;
        }

        .list_product_off {
          position: absolute;
          width: 81.36px;
          max-width: 81.36px;
          height: 72px;
          color: #fff;
          background: black;
          position: absolute;
          clip-path: polygon(100% 0, 0 0, 100% 100%);
          background: #f8475f;

          p {
            position: relative;
            top: -15px;
            left: 15px;
            font-weight: 900;
            font-size: 16px;
            line-height: 22px;
            color: #fff;
          }
        }

        button {
          visibility: hidden;
          margin-top: 8px;
          margin-bottom: 14.41px;
          width: 125.28px;
          height: 32.42px;
          left: 425px;
          top: 896.17px;
          background: #000000;
          color: #fff;
          border-radius: 5px;
          border: 0;

          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 16px;

          align-items: center;
          text-align: center;
        }

        span {
          margin-top: 1px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          color: #747474;
        }
        img {
          top: 0px;
          margin-top: 0px;
          width: 100%;
          max-width: 216px;
        }
      }
      li:hover {
        transition: 0.5s ease;
        background: #e6e8ea;

        button {
          transition: 0.5s ease;
          margin-top: 8px;
          margin-bottom: 14.41px;
          width: 125.28px;
          height: 32.42px;
          left: 425px;
          top: 896.17px;
          background: #000000;
          color: #fff;
          border-radius: 5px;
          border: 0;

          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 16px;

          align-items: center;
          text-align: center;
          visibility: visible;
        }
      }
    }
  }
`;
