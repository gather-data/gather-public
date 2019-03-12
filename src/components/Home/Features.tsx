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
  Link,
  LinkTypes,
  pageSmallWidth,
  Page,
  Row,
  Column,
  transition,
  l,
  r,
} from 'gather-style';

import Checkmark from '../Checkmark';
import withWaypoint from '../withWaypoint';

import Tag from '../Tag';

import dataImage from './features/data.svg';
import privacyImage from './features/privacy.svg';
import actionsImage from './features/actions.svg';
import timelineImage from './features/timeline.svg';
import analyticsImage from './features/analytics.svg';

const Container = styled(Page)`
  position: relative;
  ${mt(15)};
  ${mb(5)};

  ${utils.breakpoint(
    'md',
    () => `
      ${mt(20)()};
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
  ${mb(8)};
  flex: 1;

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

const FeatureContainer = styled(Flex)`
  flex-flow: column;
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

const DataImage = styled(BaseImage)`
  transform: scale(1.4);
`;
const PrivacyImage = styled(BaseImage)`
  transform: scale(1.3);
`;
const ActionsImage = styled(BaseImage)`
  transform: scale(1.3);
`;
const TimelineImage = styled(BaseImage)`
  transform: scale(1.4);

  ${utils.breakpoint(
    'md',
    () => `
      transform: scale(1.25);
    `
  )};
`;
const AnalyticsImage = styled(BaseImage)`
  transform: scale(1.2) translate(0, 20px);
`;

const CheckmarkRow = styled(Flex)`
  width: 50%;
  ${mb(1.5)};
`;

const Line = styled.div`
  width: 1px;
  border: 1px dashed ${colors.border};
  position: absolute;
  top: 0;
  left: 32px;
  bottom: 0;

  ${utils.breakpoint(
    'md',
    () => `
      left: 50%;
    `
  )};
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
    image: dataImage,
  },
  {
    ...featureIQ,
    image: dataImage,
  },
  {
    ...featureOrchestrate,
    image: dataImage,
  },
];

const Features = (props: Props) => (
  <Container width={pageSmallWidth}>
    <Line />
    <Column>
      {getFeatureInfos(props).map(info => (
        <FeatureContainer>
          <FeatureImage>
            <DataImage src={info.image} />
          </FeatureImage>
          <FeatureContent>
            <StyledWaypoint bottomOffset="30%" />
            <Text mt={2} type={TextTypes.HEADING_2} color={colors.navy}>
              {info.title}
            </Text>
            <Text color={colors.navy80} mt={1} type={TextTypes.BODY} mb={3}>
              {info.copy}
            </Text>
            <Flex flow="row wrap">
              {info.benefits.map(benefit => (
                <CheckmarkRow>
                  <Checkmark />
                  <Text ml={1} type={TextTypes.BODY_SMALL}>
                    {benefit.title}
                  </Text>
                </CheckmarkRow>
              ))}
            </Flex>
          </FeatureContent>
        </FeatureContainer>
      ))}
    </Column>
  </Container>
);

export default Features;
