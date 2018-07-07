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
  pv,
  pt,
  pb,
} from 'gather-style';

import hero from './hero.svg';

const Container = styled(Row)`
  align-items: center;
  transform: translate(0, -30px);
  ${pt(6)};

  ${utils.breakpoint(
    'md',
    () => `
    height: 776px;
  `
  )};
`;

const CtaRow = styled(Flex)`
  ${mt(3)};

  ${utils.breakpoint(
    'md',
    () => `
    flex-flow: row;
    align-items: center;
  `
  )};
`;

const HeroImage = styled.img`
  display: none;

  ${utils.breakpoint(
    'lg',
    () => `
      transform: scale(1.4) translate(40px, 0);
      display: block;
    `
  )};
`;

const TrialText = styled(Text)`
  ${mt(1)};

  ${utils.breakpoint(
    'md',
    () => `
      ${mt(0)};
    `
  )};
`;

const Hero = ({ title, subtitle, ctaText, trialText }) => (
  <Page width={pageSmallWidth}>
    <Container>
      <Column md={12} lg={6}>
        <Text type={TextTypes.HEADING_1}>{title}</Text>
        <Text mt={2} type={TextTypes.BODY}>
          {subtitle}
        </Text>
        <CtaRow alignItems="flex-start" flow="column">
          <Link to="/" type={LinkTypes.BUTTON_PRIMARY} mr={2}>
            {ctaText}
          </Link>
          <TrialText color={colors.purple80} type={TextTypes.BODY_SMALL}>
            {trialText}
          </TrialText>
        </CtaRow>
      </Column>
      <Column md={12} lg={6}>
        <HeroImage src={hero} />
      </Column>
    </Container>
  </Page>
);

export default Hero;
