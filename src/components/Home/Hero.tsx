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

function splitTextWithHighlight(text, highlight) {
  const match = text.match(`(${highlight})`);
  const start = match.index;
  const end = start + highlight.length;

  const first = text.slice(0, start);
  const second = text.slice(start, end);
  const last = text.slice(end);

  return [first, second, last];
}

const Hero = ({
  title,
  titleHighlight,
  subtitle,
  ctaText,
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
                type={LinkTypes.TEXT}
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
              >
                {first}
              </Text>
            )}
            {second && (
              <Text color={colors.primary} type={TextTypes.HEADING_1}>
                {second}
              </Text>
            )}
            {last && (
              <Text
                color={colors.primary}
                type={TextTypes.HEADING_1}
                heavy={false}
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
              href="https://app.gatherdata.co/signup"
              type={LinkTypes.BUTTON_PRIMARY}
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
