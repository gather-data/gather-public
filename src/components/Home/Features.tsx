import React from 'react';
import styled from 'styled-components';
import AndroidArrowForward from 'react-icons/lib/io/android-arrow-forward';
import { utils } from 'hedron';

import {
  colors,
  borderRadius,
  pv,
  ph,
  mb,
  mt,
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
} from 'gather-style';

import Tag from '../Tag';

import dataImage from './features/data.svg';
import privacyImage from './features/privacy.svg';
import actionsImage from './features/actions.svg';
import timelineImage from './features/timeline.svg';
import analyticsImage from './features/analytics.svg';

const FeatureContainer = styled(Row)`
  ${mb(10)};

  ${utils.breakpoint(
    'md',
    () => `
      ${mb(22)()};
    `
  )};
`;

const FeatureContent = styled(Column)`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  order: 1;

  ${utils.breakpoint(
    'md',
    () => `
      order: unset;
    `
  )};
`;

const Container = styled(Page)`
  ${mt(15)};

  ${utils.breakpoint(
    'md',
    () => `
      ${mt(30)()};
    `
  )};
`;

const ImageContainer = styled(Column)`
  display: flex;
  flex-flow: column;
  align-items: center;
  ${mb(8)};

  ${utils.breakpoint(
    'md',
    () => `
      order: unset;
      padding: 0;
      ${mb(0)()};
    `
  )};
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
  transform: scale(1.6);
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

const Features = ({
  featureData,
  featurePrivacy,
  featureMagicActions,
  featureTimeline,
  featureAnalytics,
}) => (
  <Container width={pageSmallWidth}>
    <FeatureContainer>
      <FeatureContent sm={6}>
        <Tag type={TextTypes.BODY_TINY} heavy>
          {featureData.tag}
        </Tag>
        <Text mt={2} type={TextTypes.HEADING_2} color={colors.primary}>
          {featureData.title}
        </Text>
        <Text color={colors.navy80} mt={1} type={TextTypes.BODY}>
          {featureData.copy}
        </Text>
        {featureData.ctaTo && (
          <Link
            iconEnd
            icon={<AndroidArrowForward size={24} />}
            type={LinkTypes.BUTTON_DEFAULT}
            mt={3}
            to={featureData.ctaTo}
          >
            {featureData.ctaText}
          </Link>
        )}
      </FeatureContent>
      <ImageContainer sm={5} mdShift={1}>
        <DataImage src={dataImage} />
      </ImageContainer>
    </FeatureContainer>
    <FeatureContainer>
      <ImageContainer sm={5}>
        <ActionsImage src={actionsImage} />
      </ImageContainer>
      <FeatureContent sm={6} mdShift={1}>
        <Tag type={TextTypes.BODY_TINY} heavy>
          {featureMagicActions.tag}
        </Tag>
        <Text mt={2} type={TextTypes.HEADING_2} color={colors.primary}>
          {featureMagicActions.title}
        </Text>
        <Text mt={1} type={TextTypes.BODY} color={colors.navy80}>
          {featureMagicActions.copy}
        </Text>
        {featureMagicActions.ctaTo && (
          <Link
            iconEnd
            icon={<AndroidArrowForward size={24} />}
            type={LinkTypes.BUTTON_DEFAULT}
            mt={3}
            to={featureMagicActions.ctaTo}
          >
            {featureMagicActions.ctaText}
          </Link>
        )}
      </FeatureContent>
    </FeatureContainer>
    <FeatureContainer>
      <FeatureContent sm={6}>
        <Tag type={TextTypes.BODY_TINY} heavy>
          {featureTimeline.tag}
        </Tag>
        <Text mt={2} type={TextTypes.HEADING_2} color={colors.primary}>
          {featureTimeline.title}
        </Text>
        <Text mt={1} type={TextTypes.BODY} color={colors.navy80}>
          {featureTimeline.copy}
        </Text>
        {featureTimeline.ctaTo && (
          <Link
            iconEnd
            icon={<AndroidArrowForward size={24} />}
            type={LinkTypes.BUTTON_DEFAULT}
            mt={3}
            to={featureTimeline.ctaTo}
          >
            {featureTimeline.ctaText}
          </Link>
        )}
      </FeatureContent>
      <ImageContainer sm={5} mdShift={1}>
        <TimelineImage src={timelineImage} />
      </ImageContainer>
    </FeatureContainer>
    <FeatureContainer>
      <ImageContainer sm={5}>
        <AnalyticsImage src={analyticsImage} />
      </ImageContainer>
      <FeatureContent sm={6} mdShift={1}>
        <Tag type={TextTypes.BODY_TINY} heavy>
          {featureAnalytics.tag}
        </Tag>
        <Text mt={2} type={TextTypes.HEADING_2} color={colors.primary}>
          {featureAnalytics.title}
        </Text>
        <Text mt={1} type={TextTypes.BODY} color={colors.navy80}>
          {featureAnalytics.copy}
        </Text>
        {featureAnalytics.ctaTo && (
          <Link
            iconEnd
            icon={<AndroidArrowForward size={24} />}
            type={LinkTypes.BUTTON_DEFAULT}
            mt={3}
            to={featureAnalytics.ctaTo}
          >
            {featureAnalytics.ctaText}
          </Link>
        )}
      </FeatureContent>
    </FeatureContainer>
    <FeatureContainer>
      <FeatureContent sm={6}>
        <Flex>
          <Tag type={TextTypes.BODY_TINY} heavy>
            {featurePrivacy.tag}
          </Tag>
          <Tag type={TextTypes.BODY_TINY} heavy color={colors.blue}>
            Coming soon
          </Tag>
        </Flex>
        <Text mt={2} type={TextTypes.HEADING_2} color={colors.primary}>
          {featurePrivacy.title}
        </Text>
        <Text mt={1} type={TextTypes.BODY} color={colors.navy80}>
          {featurePrivacy.copy}
        </Text>
        {featurePrivacy.ctaTo && (
          <Link
            iconEnd
            icon={<AndroidArrowForward size={24} />}
            type={LinkTypes.BUTTON_DEFAULT}
            mt={3}
            to={featurePrivacy.ctaTo}
          >
            {featurePrivacy.ctaText}
          </Link>
        )}
      </FeatureContent>
      <ImageContainer sm={5} mdShift={1}>
        <PrivacyImage src={privacyImage} />
      </ImageContainer>
    </FeatureContainer>
  </Container>
);

export default Features;
