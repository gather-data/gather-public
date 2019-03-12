import React from 'react';
import { utils } from 'hedron';
import styled from 'styled-components';

import {
  Page,
  Row,
  Column,
  pageSmallWidth,
  Text,
  TextTypes,
  Flex,
  Link,
  LinkTypes,
  colors,
  mt,
  mb,
  ph,
  mh,
  maxWidth,
  borderRadius,
  boxShadowBig,
} from 'gather-style';

import demo from './demo.png';

const Container = styled(Row)``;

const CtaRow = styled(Flex)`
  ${mt(3)};
`;

const HeroImage = styled.img`
  margin: 0;
  transform: translate(0, 10px) scale(0.9);
  width: 100%;
  height: 100%;
  max-width: 1020px;
  ${borderRadius};
  ${boxShadowBig};

  ${utils.breakpoint(
    'md',
    () => `
      transform: translate(0, 70px) scale(1);
      margin: 0;
    `
  )};
`;

const ImageContainer = styled(Column)`
  display: flex;
  justify-content: center;
  margin-bottom: -30px;
  position: relative;

  ${utils.breakpoint(
    'md',
    () => `
      margin-bottom: -30px;
    `
  )};
`;

const Background = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 223px;

  ${utils.breakpoint(
    'md',
    () => `
      height: 643px;
    `
  )};
`;

const Demo = () => (
  <Container fluid>
    <ImageContainer fluid>
      <Background
        viewBox="0 0 1440 643"
        version="1.1"
        preserveAspectRatio="none"
      >
        <path
          fill={colors.purple}
          d="M0,0
             L1440,0
             L1440,627.87957
             C1270.91309,606.43781
               1131.65278,595.71693
               1022.21909,595.71693
             C802.433247,595.71693
               619.922616,643
               484.124946,643
             C256.246227,643
               94.8712451,623.57791
               0,584.73374
             L0,0
             Z"
          id="bg"
        />
      </Background>
      <HeroImage src={demo} />
    </ImageContainer>
  </Container>
);

export default Demo;
