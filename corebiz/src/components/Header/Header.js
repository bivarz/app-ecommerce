import React from 'react';
import userIcon from '../../assets/images/userIcon.svg';
import searchIcon from '../../assets/images/searchIcon.svg';
import cartIcon from '../../assets/images/cartIcon.svg';
import { Container, Content, Input, Profile } from './styles';
import Img from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={Img} alt="logo_corebiz" />
        </nav>
        <Input>
          <input type="text" placeholder="O que você está procurando?" />
          <img src={searchIcon} style={{ height: '18px ' }} alt="search" />
        </Input>

        <Profile>
          <div className="profile_items">
            <img src={userIcon} style={{ height: '23px ' }} alt="User" />
            <p>Minha Conta</p>
            <img src={cartIcon} style={{ height: '18px ' }} alt="cart" />
            <span>1</span>
          </div>
        </Profile>
      </Content>
    </Container>
  );
}
