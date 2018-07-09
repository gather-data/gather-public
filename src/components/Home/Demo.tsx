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
  maxWidth,
} from 'gather-style';

import demo from './demo.svg';

const Container = styled(Row)`
  background: ${colors.purple};
`;

const CtaRow = styled(Flex)`
  ${mt(3)};
`;

const HeroImage = styled.img`
  margin: 0;
  transform: translate(0, 20px);
  width: 100%;
  height: 100%;
  ${ph(3)};
  max-width: 1320px;

  ${utils.breakpoint(
    'md',
    () => `
      transform: translate(0, 60px);
    `
  )};
`;

const ImageContainer = styled(Column)`
  display: flex;
  justify-content: center;
`;

const Demo = () => (
  <Container fluid>
    <ImageContainer fluid>
      <HeroImage src={demo} />
    </ImageContainer>
  </Container>
);

export default Demo;
