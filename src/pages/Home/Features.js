import React from 'react';
import styled from 'styled-components';
import AndroidArrowForward from 'react-icons/lib/io/android-arrow-forward';

import {
  colors,
  borderRadius,
  pv,
  ph,
  mb,
  Flex,
  Text,
  TextTypes,
  Link,
  LinkTypes,
  pageSmallWidth,
  Page,
  Column,
} from 'gather-style';

import dataImage from './features/data.svg';
import privacyImage from './features/privacy.svg';
import actionsImage from './features/actions.svg';
import timelineImage from './features/timeline.svg';
import analyticsImage from './features/analytics.svg';

const Tag = styled(Text)`
  background: ${colors.beige};
  color: ${colors.white};
  text-transform: uppercase;
  ${borderRadius};
  ${pv(0.5)};
  ${ph(1)};
`;

const FeatureContainer = styled(Flex)`
  ${mb(30)};
`;
const FeatureContent = styled(Column)`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;
const Container = styled(Page)``;

const DataImage = styled.img`
  transform: scale(1.6);
`;
const PrivacyImage = styled.img`
  transform: scale(1.3);
`;
const ActionsImage = styled.img`
  transform: scale(1.3);
`;
const TimelineImage = styled.img`
  transform: scale(1.25);
`;
const AnalyticsImage = styled.img`
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
      <FeatureContent md={6}>
        <Tag type={TextTypes.BODY_TINY} heavy>
          {featureData.tag}
        </Tag>
        <Text mt={2} type={TextTypes.HEADING_2}>
          {featureData.title}
        </Text>
        <Text mt={1} type={TextTypes.BODY}>
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
      <Column md={6} mdShift={1}>
        <DataImage src={dataImage} />
      </Column>
    </FeatureContainer>
    <FeatureContainer>
      <Column md={6}>
        <ActionsImage src={actionsImage} />
      </Column>
      <FeatureContent md={6} mdShift={1}>
        <Tag type={TextTypes.BODY_TINY} heavy>
          {featureMagicActions.tag}
        </Tag>
        <Text mt={2} type={TextTypes.HEADING_2}>
          {featureMagicActions.title}
        </Text>
        <Text mt={1} type={TextTypes.BODY}>
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
      <FeatureContent md={6}>
        <Tag type={TextTypes.BODY_TINY} heavy>
          {featureTimeline.tag}
        </Tag>
        <Text mt={2} type={TextTypes.HEADING_2}>
          {featureTimeline.title}
        </Text>
        <Text mt={1} type={TextTypes.BODY}>
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
      <Column md={6} mdShift={1}>
        <TimelineImage src={timelineImage} />
      </Column>
    </FeatureContainer>
    <FeatureContainer>
      <Column md={6}>
        <AnalyticsImage src={analyticsImage} />
      </Column>
      <FeatureContent md={6} mdShift={1}>
        <Tag type={TextTypes.BODY_TINY} heavy>
          {featureAnalytics.tag}
        </Tag>
        <Text mt={2} type={TextTypes.HEADING_2}>
          {featureAnalytics.title}
        </Text>
        <Text mt={1} type={TextTypes.BODY}>
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
      <FeatureContent md={6}>
        <Tag type={TextTypes.BODY_TINY} heavy>
          {featurePrivacy.tag}
        </Tag>
        <Text mt={2} type={TextTypes.HEADING_2}>
          {featurePrivacy.title}
        </Text>
        <Text mt={1} type={TextTypes.BODY}>
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
      <Column md={6} mdShift={1}>
        <PrivacyImage src={privacyImage} />
      </Column>
    </FeatureContainer>
  </Container>
);

export default Features;
