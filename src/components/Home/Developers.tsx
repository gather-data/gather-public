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
  mb,
  ml,
  mr,
  ph,
  pv,
  pt,
  pb,
  maxWidth,
} from 'gather-style';

import Tag from '../Tag';
import Checkmark from '../Checkmark';
import CodeSwiper from '../CodeSwiper';

import demo from './demo.svg';

const Container = styled.div`
  position: relative;

  ${pb(20)};
  ${pt(20)};
`;

const Background = styled.svg`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const BenefitImage = styled.img`
  max-width: 48px;
  margin: 0;
`;

const BenefitImageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 66px;
  ${mb(2)};
`;

const Benefits = styled(Flex)`
  ${mt(4)};
  ${mb(4)};
`;

const Benefit = styled(Flex)`
  width: 50%;
  ${mb(2)};
`;

const Title = styled(Text)``;

const InnerContainer = styled(Flex)`
  flex-flow: column;
  align-items: stretch;

  ${utils.breakpoint(
    'md',
    () => `
      align-items: center;
      flex-flow: row;
    `
  )};
`;

const LeftColumn = styled(Flex)`
  ${utils.breakpoint(
    'md',
    () => `
      flex: 3;
      ${mr(8)()};
    `
  )};
`;

const RightColumn = styled(Flex)`
  ${mt(6)};

  ${utils.breakpoint(
    'md',
    () => `
      flex: 2;
      ${mt(0)()};
    `
  )};
`;

interface IBenefit {
  title: string;
  copy: string;
  image: string;
}

interface CodeSample {
  language: string;
  code: string;
  title: string;
}

interface IProps {
  title: string;
  subtitle: string;
  benefits: IBenefit[];
  ctaText: string;
  ctaTo: string;
  codeSamples: CodeSample[];
}

const Demo: React.SFC<IProps> = ({
  title,
  subtitle,
  benefits,
  ctaText,
  codeSamples,
  ctaTo,
}) => (
  <Container>
    <Background viewBox="0 0 1440 847" version="1.1" preserveAspectRatio="none">
      <defs>
        <radialGradient
          cx="47.1347431%"
          cy="-22.1558843%"
          fx="47.1347431%"
          fy="-22.1558843%"
          r="330.87678%"
          gradientTransform="translate(0.471347,-0.221559),scale(0.587753,1.000000),rotate(56.785651),translate(-0.471347,0.221559)"
          id="radialGradient-1"
        >
          <stop stop-color="#232B55" offset="0%" />
          <stop stop-color="#131837" offset="100%" />
        </radialGradient>
      </defs>
      <g id="Home-Copy" fill="url(#radialGradient-1)">
        <g id="developers">
          <polygon
            id="Rectangle-11"
            points="0 0.635022636 1440 95.3997081 1440 847 0 847"
          />
        </g>
      </g>
    </Background>
    <Page>
      <Column>
        <InnerContainer>
          <LeftColumn flow="column" alignItems="flex-start">
            <Tag
              type={TextTypes.BODY_TINY}
              heavy
              color={colors.blue}
              textColor="#015D85"
            >
              DEVELOPERS
            </Tag>
            <Title
              mt={3}
              mb={1}
              type={TextTypes.HEADING_2}
              color={colors.white}
            >
              {title}
            </Title>
            <Text type={TextTypes.BODY} color={colors.white}>
              {subtitle}
            </Text>
            <Benefits flow="row wrap">
              {benefits.map(benefit => (
                <Benefit mb={2}>
                  <Checkmark />
                  <Text ml={1} color="#4CD964">
                    {benefit.title}
                  </Text>
                </Benefit>
              ))}
            </Benefits>
            <Link
              linkType={LinkTypes.BUTTON_PRIMARY}
              useReachRouter
              to={ctaTo}
              icon={<AndroidArrowForward size={24} />}
              iconEnd
            >
              {ctaText}
            </Link>
          </LeftColumn>
          <RightColumn>
            <CodeSwiper codeSamples={codeSamples} />
          </RightColumn>
        </InnerContainer>
      </Column>
    </Page>
  </Container>
);

export default Demo;
