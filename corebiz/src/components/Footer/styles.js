import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;900&display=swap');

  width: 100%;
  height: 213px;
  position: relative;
  min-width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: #000000;
  border-bottom: 10px solid #c0c0c0;

  @media only screen and (max-width: 742px) {
    width: 100%;
    height: 386px;
    position: relative;
    min-width: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background: #000000;
  }
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1172.2px;
  height: 172px;
  left: 380px;
  top: 1179px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 323px) {
    width: 320px;
    max-height: 386px;
    display: flex;
    flex-direction: column;
  }

  .content_left {
    max-width: 216px;
    height: 176px;

    @media only screen and (max-width: 323px) {
      position: absolute;

      top: 5px;
      left: 15px;
    }

    .content_left_title {
      position: relative;
      width: 107px;
      height: 28px;

      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 27px;
      color: #ffff;
      margin-top: -1px;
      margin-bottom: 15px;
    }
    .content_left_title_line {
      position: absolute;
      width: 43.5px;
      height: 0px;
      border: 3px solid #ffffff;
      margin-top: -4px;
      margin-bottom: 20px;
      background: #fff;
    }
    .content_left_title_address {
      position: relative;
      width: 205px;
      height: 110px;
      text-align: left;
      margin-top: 30px;
      color: white;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 25px;
      margin-right: 5px;
    }
  }

  .content_middle {
    width: 100%;
    width: 196px;
    height: 101px;
    display: block;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 323px) {
      position: absolute;

      top: 200px;
    }

    span:first-child {
      /* ENTRE EM CONTATO */

      bottom: 139px;
      font-family: 'Nunito';
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      color: #000000;
    }
    span:last-child {
      /* FALE COM O NOSSO CONSULTOR ONLINE */
      display: flex;
      align-items: center;
      justify-content: center;

      width: 122px;
      height: 28px;
      left: 919px;
      bottom: 70px;

      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 100%;

      text-align: justify;
      text-justify: inter-cluster;

      color: #000000;
    }

    button {
      background: #ffffff;
      border: 0;
      border-radius: 5px;
      overflow: hidden;
      width: 195px;
      height: 38px;

      text-align: center;
      display: flex;
      align-items: center;
      margin-bottom: 12.5px;

      div {
        display: block;
        align-items: center;
        padding: 15px;
        margin-top: 2px;
      }
    }
    button:last-child {
      background: #ffffff;
      border: 0;
      border-radius: 5px;
      overflow: hidden;
      width: 195px;
      height: 38px;
      margin-top: 25px;
      text-align: center;
      display: flex;
      align-items: center;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .content_right {
    padding: 5px;

    @media only screen and (max-width: 323px) {
      position: absolute;

      top: 310px;
    }
  }
`;
