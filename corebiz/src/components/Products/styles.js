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

  /* middle  */
  @media only screen and (max-width: 742px) {
    width: 100%;
    display: flex;
  }

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

    @media only screen and (max-width: 320px) {
      position: absolute;
      width: 138px;
      height: 28px;
      margin-left: 10px;

      font-style: normal;
      font-weight: 900;
      font-size: 20px;
      line-height: 27px;
      color: #000;
      margin-top: 29px;
    }
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

    @media only screen and (max-width: 900px) {
      display: flex;
      display: none;
    }
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
    max-height: 510px;
    list-style: none;

    @media only screen and (max-width: 1020px) {
      display: flex;
      width: 100%;
    }
    @media only screen and (max-width: 320px) {
      display: flex;
      width: 100%;
      overflow: hidden;
    }

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
      margin-right: 22px;

      @media only screen and (max-width: 1020px) {
        display: flex;
        width: 100%;
      }
      @media only screen and (max-width: 900px) {
        display: flex;
        width: 100%;
        margin-right: 5px;
      }
      @media only screen and (max-width: 753px) {
        display: flex;
        width: 100%;
        margin-right: 5px;
      }
      .list_down_title {
        span {
          @media only screen and (max-width: 323px) {
            font-weight: 600;
            font-size: 10px;
            line-height: 14px;
            text-align: center;
          }
        }
      }
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

        @media only screen and (max-width: 1020px) {
          display: flex;
          width: 100%;
        }
        @media only screen and (max-width: 900px) {
          display: flex;
          width: 100%;
          margin-left: 5px;
        }
        @media only screen and (max-width: 753px) {
          display: flex;
          width: 100%;
          margin-left: 5px;
          margin-right: 5px;
        }

        @media only screen and (max-width: 323px) {
          display: flex;
          width: 132px;
          height: 284px;
          margin-right: 30px;
          margin-top: -70px;
        }

        .div_li {
          width: 100%;
          max-width: 216px;
          min-width: 132px;
        }

        .off_div {
          position: relative;
          align-items: right;
          width: 100%;
          top: 0px;
          right: -24px;

          @media only screen and (max-width: 842px) {
            position: relative;
            top: 0px;
            right: -1px;
          }

          @media only screen and (max-width: 500px) {
            position: relative;
            top: 0px;
            right: 2px;
          }
        }

        .list_product_off {
          position: absolute;
          width: 81.36px;
          max-width: 81.36px;
          height: 72px;
          color: #fff;
          clip-path: polygon(100% 0, 0 0, 100% 100%);
          background: #f8475f;

          @media only screen and (max-width: 742px) {
            width: 71px;
            height: 62px;
            max-height: 81.36px;
          }

          p {
            position: relative;
            top: -15px;
            left: 15px;
            font-weight: 900;
            font-size: 16px;
            line-height: 22px;
            color: #fff;

            @media only screen and (max-width: 742px) {
              position: relative;
              top: -10px;
              left: 10px;
              font-weight: 600;
              font-size: 10px;
              line-height: 22px;
              color: #fff;
            }
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
  .banner_li {
    visibility: hidden;
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 70px;
    height: 100%;

    span {
      margin-top: 390px;
      margin-bottom: auto;
      position: relative;
      width: 10px;
      max-width: 10px;
      height: 10px;
      color: #fff;
      background: black;
      clip-path: circle(50% at 50% 50%);
      background: #bdbdbd;
      z-index: 99;

      @media only screen and (max-width: 323px) {
        visibility: visible;
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 70px;
        height: 100%;

        span {
          margin-top: 390px;
          margin-bottom: auto;
          position: relative;
          width: 10px;
          max-width: 10px;
          height: 10px;
          color: #fff;
          background: black;
          clip-path: circle(50% at 50% 50%);
          background: #bdbdbd;
          z-index: 99;
        }
      }
    }
  }
`;
