import React from 'react';
import { MdEmail, MdHeadsetMic } from 'react-icons/md';

import whiteLogo from '../../assets/images/white_logo.svg';

import { Container, Content } from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <div className="content_left">
          <div className="content_left_title">
            <span>Localização</span>
          </div>
          <span className="content_left_title_line" />
          <div className="content_left_title_address">
            <span>
              Rua Ifigênia Maria de Oliveira 3793
              <br /> Jd. Piratininga - 14403-583
              <br /> Franca SP, Brasil
              <br />
              contato@clickqi.com.br
              <br /> +55 16 3713-6985
            </span>
          </div>
        </div>
        <div className="content_middle">
          <div>
            <button type="button">
              <div>
                <MdEmail size={18} />
              </div>
              <span>ENTRE EM CONTATO</span>
            </button>
            <div />
            <div>
              <button type="button">
                <div>
                  <MdHeadsetMic size={18} />
                </div>
                <span>FALE COM NOSSO CONSULTOR ONLINE</span>
              </button>
            </div>
          </div>
        </div>
        <div className="content_right">
          <img src={whiteLogo} alt="whiteLogo" />
        </div>
      </Content>
    </Container>
  );
}
