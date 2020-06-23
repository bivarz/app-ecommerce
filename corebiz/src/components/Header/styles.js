import styled from 'styled-components';

export const Container = styled.div`
  background: #ffff;
`;
export const Content = styled.div`
  background: #ffff;
  max-width: 1248px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-left: 10px;
    height: 41px;
  }
`;
export const Input = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    max-width: 718px;
    width: 100%;
    border: 0px;
    color: #7a7a7a;
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    margin-left: 20px;
    padding: 3px 0px;
    border-bottom: 1px solid #7a7a7a;
  }
  img {
    display: flex;
    position: relative;
    left: -21px;
    bottom: 1px;
    z-index: 1;
  }
`;
export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 200px;
  width: 100%;
  height: 80px;

  .profile_items {
    width: 100%;
    display: flex;
    justify-content: left;
    align-items: center;

    img {
      margin-right: 3px;
    }

    p {
      margin-right: 20px;
      color: #7a7a7a;
    }
    span {
      width: 14px;
      height: 14px;
      padding: 6 6px;
      color: white;
      background: #f8475f;
      text-align: center;
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 10px;
      line-height: 14px;
      align-items: center;

      border-radius: 10px;
    }
  }
`;
