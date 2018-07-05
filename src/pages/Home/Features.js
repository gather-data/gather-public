import React from 'react';
import styled from 'styled-components';

import {
  colors,
  borderRadius,
  pv,
  ph,
  Flex,
  Text,
  TextTypes,
  Link,
  LinkTypes,
} from 'gather-style';

const Tag = styled(Text)`
  background: ${colors.beige};
  ${pv(0.5)};
  ${ph(1)};
`;

const FeatureContainer = styled(Flex)``;
const FeatureContent = styled.div``;

const Feature = ({
  featureData,
  featurePrivacy,
  featureMagicActions,
  featureTimeline,
  featureAnalytics,
}) => (
  <div>
    <FeatureContainer>
      <FeatureContent>
        <Tag type={TextTypes.TINY} heavy>
          {featureData.tag}
        </Tag>
        <Text mt={2} type={TextTypes.HEADING_2}>
          {featureData.title}
        </Text>
        <Text mt={1} type={TextTypes.BODY}>
          {featureData.copy}
        </Text>
      </FeatureContent>
    </FeatureContainer>
  </div>
);

export default Feature;
