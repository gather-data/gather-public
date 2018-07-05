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
} from 'gather-style';

import hero from './Hero.svg';

const Container = styled(Row)`
  height: 100vh;
  align-items: center;
  transform: translate(0, -30px);

  ${utils.breakpoint(
    'md',
    () => `
    height: 776px;
  `
  )};
`;

const CtaRow = styled(Flex)`
  ${mt(3)};
`;

const HeroImage = styled.img`
  transform: scale(1.4) translate(40px, 0);
`;

const Hero = ({ title, subtitle, cta_text, trial_text }) => (
  <Page width={pageSmallWidth}>
    <Container>
      <Column md={6}>
        <Text type={TextTypes.HEADING_1}>{title}</Text>
        <Text mt={2} type={TextTypes.BODY}>
          {subtitle}
        </Text>
        <CtaRow alignItems="center">
          <Link to="/" type={LinkTypes.BUTTON_PRIMARY}>
            {cta_text}
          </Link>
          <Text color={colors.navy} ml={2} type={TextTypes.BODY_SMALL}>
            {trial_text}
          </Text>
        </CtaRow>
      </Column>
      <Column md={6}>
        <HeroImage src={hero} />
      </Column>
    </Container>
  </Page>
);

export default Hero;
