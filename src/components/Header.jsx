import React from 'react';
import Picture from './Picture';
import bgImg_mob from '../assets/imgs/bgHeader.png';
import bgImg_pc from '../assets/imgs/bgHeader2x.png';
import star_mob from '../assets/imgs/star.png';
import star_pc from '../assets/imgs/star@2x.png';
import kylo_mob from '../assets/imgs/kylo.png';
import kylo_pc from '../assets/imgs/kylo2x.png';
import wars_mob from '../assets/imgs/wars.png';
import wars_pc from '../assets/imgs/wars@2x.png';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  align-items: center;
  justify-content: center;

  position: relative;
`;

const BgImg = styled.figure`
  grid-column: 1 / -1;
  grid-row: 1;
`;

const Zindex = styled.figure`
  position: relative;
  z-index: 0;
  top: 16px;
`;

const Kylo = styled(Zindex)`
  grid-column: 2 / 8;
  grid-row: 1;
  align-self: flex-end;
  z-index: 1;
`;

const Star = styled(Zindex)`
  grid-column: 3 / 5;
  grid-row: 1;
  left: var(--test);
`;

const Wars = styled(Zindex)`
  grid-column: 7 / 9;
  grid-row: 1;
  right: var(--test);
`;

const CardStyled = styled.div`
  grid-column: 8;
  grid-row: 1;
  align-self: flex-end;
`;

const Division = styled.div`
  width: 100%;
  height: 8px;
  background-color: black;
`;

function Card() {
  return (
    <CardStyled>
      <h4>CRIE SUA LEGIÃO</h4>
      <Division></Division>
      <p>01/04</p>
      <button>&lt;</button>
      <button>&gt;</button>
    </CardStyled>
  )
}

function Header() {
  return (
    <HeaderStyled>
      <BgImg>
        <Picture className='bgImg' mobileImg={bgImg_mob} pcImg={bgImg_pc} alt='Fundo divido ao meio: à esquerda a Estrela da Morte em fundo preto e à direita um close da Millennium Falcon' />
      </BgImg>
      <Star>
        <Picture mobileImg={star_mob} pcImg={star_pc} alt='A palavra "star"' />
      </Star>
      <Kylo>
        <Picture mobileImg={kylo_mob} pcImg={kylo_pc} alt='Kylo Ren em pose de batalha' />
      </Kylo>
      <Wars>
        <Picture className='wars zIndex' mobileImg={wars_mob} pcImg={wars_pc} alt='A palavra "wars"' />
      </Wars>
      <Card />
    </HeaderStyled>
  )
}

export default Header