import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap');

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 146px;

  background: #f2f2f2;

  .focused {
    border: 1px solid #d7182a;
  }

  .container_content {
    justify-content: center;
    align-items: center;
  }
  .container_content_title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  button {
    display: flex;
    width: 140px;
    height: 48px;
    background: #000000;
    border-radius: 5px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #ffff;
    border: none;
    margin-left: 0px;
  }
  Input {
    width: 100%;
    width: 280px;
    height: 48px;
    background: #ffffff;
    margin-right: 8px;
    border-radius: 5px;
    padding: 16px;
    border: none;

    ::placeholder {
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;

      color: #585858;
    }

    :focus {
      border: 1px solid #bdbdbd;
      padding: 16px;
    }
  }
`;
export const Content = styled.div`
  background: pink;

  span {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 9px;
    color: #d7182a;

    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
  }
`;
export const ContentMsg = styled.div`
  .content_msg {
    width: 100%;
    display: block;
    align-items: center;
    justify-content: column;

    button {
      display: flex;
      position: relative;
      width: 328px;
      height: 48px;
      background: #000000;
      border-radius: 5px;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #ffff;
      border: none;
      margin-left: 0px;
    }
  }
  .content_msg_done {
    width: 100%;
    display: block;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background: red;
    height: 26px;
    margin-bottom: 15px;

    p {
      position: relative;
      width: 338px;
      font-style: normal;

      font-size: 14px;
      line-height: 14px;
      display: flex;
      align-items: center;
      text-align: center;

      color: #000000;
      margin-bottom: 10px;
      margin-bottom: 15px;
    }

    span {
      align-items: center;
      text-align: center;
      justify-content: center;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 14px;
      margin-bottom: 15px;
    }
  }
`;
