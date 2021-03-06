import React from 'react';
import { utils } from 'hedron';
import styled from 'styled-components';
import AndroidArrowForward from 'react-icons/lib/io/android-arrow-forward';

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
  ph,
  pt,
  pb,
  p,
  borderRadius,
} from 'gather-style';

import { splitTextWithHighlight } from '../../utils';
import Tag from '../Tag';

import hero from './hero.svg';

const Container = styled(Row)`
  align-items: center;
  transform: translate(0, -30px);
  ${pt(6)};

  ${utils.breakpoint(
    'md',
    () => `
    height: 680px;
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
  max-width: 100%;

  ${utils.breakpoint(
    'md',
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

const NewContainer = styled(Flex)`
  background: ${colors.purple10};
  display: inline-flex;
  ${borderRadius};
  ${pv(1)};
  ${ph(1)};
`;

const Hero = ({
  title,
  titleHighlight,
  subtitle,
  ctaText,
  ctaHref,
  trialText,
  newItem,
}) => {
  const [first, second, last] = splitTextWithHighlight(title, titleHighlight);

  return (
    <Page width={pageSmallWidth}>
      <Container>
        <Column sm={7}>
          {newItem.newText && (
            <NewContainer
              flow="row"
              alignItems="center"
              justifyContent="flex-start"
              mb={3}
            >
              <Tag type={TextTypes.BODY_TINY} heavy color={colors.blue}>
                {newItem.newText}
              </Tag>
              <Link
                linkType={LinkTypes.TEXT}
                useReachRouter
                size="small"
                iconEnd
                icon={<AndroidArrowForward size={16} />}
                href={newItem.newHref}
                target="_blank"
              >
                {newItem.newLabel}
              </Link>
            </NewContainer>
          )}
          <span>
            {first && (
              <Text
                color={colors.primary}
                type={TextTypes.HEADING_1}
                heavy={false}
                inline
              >
                {first}
              </Text>
            )}
            {second && (
              <Text color={colors.primary} type={TextTypes.HEADING_1} inline>
                {second}
              </Text>
            )}
            {last && (
              <Text
                color={colors.primary}
                type={TextTypes.HEADING_1}
                heavy={false}
                inline
              >
                {last}
              </Text>
            )}
          </span>
          <Text mt={2} type={TextTypes.BODY} color={colors.navy80}>
            {subtitle}
          </Text>
          <CtaRow alignItems="flex-start" flow="column">
            <Link
              href={ctaHref}
              linkType={LinkTypes.BUTTON_PRIMARY}
              useReachRouter
              mb={1}
              size="large"
              iconEnd
              icon={<AndroidArrowForward size={24} />}
            >
              {ctaText}
            </Link>
          </CtaRow>
          <TrialText color={colors.navy60} type={TextTypes.BODY_SMALL}>
            {trialText}
          </TrialText>
        </Column>
        <Column sm={5}>
          <HeroImage src={hero} />
        </Column>
      </Container>
    </Page>
  );
};

export default Hero;
