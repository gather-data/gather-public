import React from 'react';
import styled from 'styled-components';
import AndroidArrowForward from 'react-icons/lib/io/android-arrow-forward';
import { utils } from 'hedron';

import {
  colors,
  borderRadius,
  pv,
  ph,
  pl,
  mb,
  mt,
  mr,
  ml,
  mh,
  Flex,
  Text,
  TextTypes,
  pageSmallWidth,
  Page,
  Row,
  Column,
  transition,
  l,
  r,
} from 'gather-style';

import Checkmark from '../../Checkmark';
import withWaypoint from '../../withWaypoint';
import Tag from '../../Tag';

import DataEngine from './DataEngine';
import Orchestrate from './Orchestrate';
import autoIQImage from './auto-iq.svg';

const Container = styled(Page)`
  position: relative;
  ${mt(15)};
  ${mb(5)};
  overflow: hidden;

  perspective: 2000px;

  ${utils.breakpoint(
    'md',
    () => `
      overflow: visible;
      ${mt(15)()};
      ${mb(26)()};
    `
  )};
`;

const FeatureContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  flex: 1;
  position: relative;
`;

const FeatureImage = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  ${mb(12)};
  flex: 1;
  align-self: stretch;

  ${utils.breakpoint(
    'md',
    () => `
      padding: 0;
      ${mb(0)()};
    `
  )};
`;

interface WaypointInterface {
  isVisible: boolean;
  bottomOffset: string;
}

const Waypoint = withWaypoint()(styled.div<WaypointInterface>`
  width: 17px;
  height: 17px;
  border-radius: 8.5px;
  position: relative;

  ${utils.breakpoint(
    'md',
    () => `
      width: 25px;
      height: 25px;
      border-radius: 12.5px;
    `
  )};

  background-color: ${props => (props.isVisible ? colors.purple : '#DFE3FD')};

  ${transition(['transform', 'background-color'])};

  &::before {
    content: '';
    width: 29px;
    height: 29px;
    border-radius: 14.5px;
    background: ${colors.border};
    position: absolute;
    left: -6.15px;
    top: -6.15px;
    z-index: 1;

    ${utils.breakpoint(
      'md',
      () => `
        width: 49px;
        height: 49px;
        border-radius: 24.5px;
        left: -50%;
        top: -50%;
      `
    )};

    opacity: ${props => (props.isVisible ? 1 : 0)};
    transform: scale(${props => (props.isVisible ? 1 : 0.2)});

    ${transition(['transform', 'opacity'])};
  }
`);

const StyledWaypoint = styled(Waypoint)<WaypointInterface>`
  position: absolute;
  top: 40px;
`;

const FeaturesContainer = styled.div`
  position: relative;
`;

const FeatureContainer = styled(Flex)`
  flex-flow: column;
  align-items: flex-start;
  padding-left: 44px;

  ${StyledWaypoint} {
    left: -41px;
    top: 25px;
  }

  &:not(:last-child) {
    ${mb(15)};
  }

  ${utils.breakpoint(
    'md',
    () => `
      flex-flow: row;
      align-items: center;
      padding-left: 0;

      &:not(:last-child) {
        ${mb(30)()};
      }
    `
  )};

  &:first-child {
    ${StyledWaypoint}::after {
      content: '';
      border: 4px solid white;
      position: absolute;
      left: calc(50% - 2px);
      top: -400px;
      bottom: 100%;
      z-index: 0;

      ${utils.breakpoint(
        'md',
        () => `
          top: -100px;
        `
      )};
    }
  }

  &:last-child {
    ${StyledWaypoint}::after {
      content: '';
      border: 4px solid white;
      position: absolute;
      left: calc(50% - 2px);
      top: 100%;
      bottom: -300px;
    }
  }

  &:nth-child(odd) {
    ${FeatureContent} {
      ${utils.breakpoint(
        'md',
        () => `
          order: 1;
          ${ml(12)()};
        `
      )};
    }

    ${FeatureImage} {
      ${utils.breakpoint(
        'md',
        () => `
          order: 0;
          ${mr(12)()};
        `
      )};
    }

    ${StyledWaypoint} {
      ${utils.breakpoint(
        'md',
        () => `
          left: -108px;
        `
      )};
    }
  }

  &:nth-child(even) {
    ${FeatureContent} {
      ${utils.breakpoint(
        'md',
        () => `
          order: 0;
          ${mr(12)()};
        `
      )};
    }

    ${FeatureImage} {
      ${utils.breakpoint(
        'md',
        () => `
          order: 1;
          ${ml(12)()};
        `
      )};
    }

    ${StyledWaypoint} {
      ${utils.breakpoint(
        'md',
        () => `
          right: -109px;
          left: initial;
        `
      )};
    }
  }
`;

const BaseImage = styled.img`
  height: 100%;
  width: 70%;
  ${mh(3)};

  ${utils.breakpoint(
    'md',
    () => `
      height: 100%;
      width: 100%;
      ${mh(0)()};
    `
  )};
`;

const AutoIQImage = styled(BaseImage)`
  transform: scale(1.6) translate(0, 20px);

  ${utils.breakpoint(
    'md',
    () => `
      transform: scale(1.6) rotate3d(0, 1, 0, -30deg) translate(30px, 0);
    `
  )};
`;

const CheckmarkRow = styled(Flex)`
  width: 100%;
  ${mb(2)};
  align-items: center;

  ${utils.breakpoint(
    'md',
    () => `
      width: 100%;
    `
  )};
`;

const Line = styled.div`
  width: 1px;
  border: 1px dashed ${colors.border};
  position: absolute;
  top: 0;
  left: 32px;
  bottom: 15%;

  ${utils.breakpoint(
    'md',
    () => `
      left: 50%;
    `
  )};
`;

const Header = styled(Flex)`
  max-width: 720px;
  margin: 0 auto;
`;

const Subtitle = styled(Text)`
  ${utils.breakpoint(
    'md',
    () => `
      ${ph(8)()};
    `
  )};
`;

const FeatureText = styled(Text)`
  line-height: 1.6;
`;

interface Benefit {
  title: string;
}

interface Feature {
  image: string;
  title: string;
  copy: string;
  benefits: Benefit[];
}

interface Props {
  title: string;
  subtitle: string;
  featureDataEngine: Feature;
  featureIQ: Feature;
  featureOrchestrate: Feature;
}

const getFeatureInfos = ({
  featureDataEngine,
  featureIQ,
  featureOrchestrate,
}: Props) => [
  {
    ...featureDataEngine,
    graphic: <DataEngine />,
  },
  {
    ...featureIQ,
    graphic: <AutoIQImage src={autoIQImage} />,
  },
  {
    ...featureOrchestrate,
    graphic: <Orchestrate />,
  },
];

const Features = (props: Props) => (
  <Container width={pageSmallWidth}>
    <Column>
      <Header flow="column">
        <Tag
          color="#95F2A5"
          textColor="#1C9531"
          type={TextTypes.BODY_TINY}
          heavy
        >
          Product
        </Tag>
        <Text
          mt={3}
          type={TextTypes.HEADING_2}
          color={colors.primary}
          align="center"
        >
          {props.title}
        </Text>
        <Subtitle
          mt={1}
          mb={12}
          type={TextTypes.BODY}
          color={colors.navy80}
          align="center"
        >
          {props.subtitle}
        </Subtitle>
      </Header>
    </Column>
    <FeaturesContainer>
      <Line />
      <Column>
        {getFeatureInfos(props).map(info => (
          <FeatureContainer>
            <FeatureImage>{info.graphic}</FeatureImage>
            <FeatureContent>
              <StyledWaypoint bottomOffset="30%" />
              <Text mt={2} type={TextTypes.HEADING_4} color="#3e4775" uppercase>
                {info.title}
              </Text>
              <FeatureText
                color={colors.navy60}
                mt={2}
                type={TextTypes.BODY_SMALL}
                mb={5}
              >
                {info.copy}
              </FeatureText>
              <Flex alignItems="flex-start" flow="row wrap">
                {info.benefits.map(benefit => (
                  <CheckmarkRow>
                    <Checkmark />
                    <Text ml={1.5} type={TextTypes.BODY_SMALL} color="#159570">
                      {benefit.title}
                    </Text>
                  </CheckmarkRow>
                ))}
              </Flex>
            </FeatureContent>
          </FeatureContainer>
        ))}
      </Column>
    </FeaturesContainer>
  </Container>
);

export default Features;
