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
} from 'gather-style';

import demo from './demo.svg';

const Container = styled(Row)`
  background: ${colors.purple};
  ${mb(30)};
`;

const CtaRow = styled(Flex)`
  ${mt(3)};
`;

const HeroImage = styled.img`
  margin: 0;
  transform: translate(0, 60px);
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
