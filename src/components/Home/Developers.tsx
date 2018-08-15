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
  ph,
  pv,
  maxWidth,
} from 'gather-style';

import Tag from '../Tag';

import demo from './demo.svg';

const Container = styled.div`
  background-image: radial-gradient(at center -50%, #1e1650 0%, #0e0c18 100%);
`;

const InnerContainer = styled(Row)`
  background-size: 32px 32px;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);

  ${pv(6)};

  ${utils.breakpoint(
    'md',
    () => `
    ${pv(6)()};
  `
  )};
`;

const BenefitImage = styled.img`
  max-width: 66px;
`;

const Benefits = styled(Row)`
  ${mb(3)};
  ${mt(3)};

  ${utils.breakpoint(
    'md',
    () => `
    ${mb(8)()};
    ${mt(6)()};
  `
  )};
`;

const Title = styled(Text)`
  ${utils.breakpoint(
    'md',
    () => `
    ${ph(8)()};
  `
  )};
`;

interface IBenefit {
  title: string;
  copy: string;
  image: string;
}

interface IProps {
  title: string;
  subtitle: string;
  benefits: IBenefit[];
  ctaText: string;
  ctaTo: string;
}

const Demo: React.SFC<IProps> = ({
  title,
  subtitle,
  benefits,
  ctaText,
  ctaTo,
}) => (
  <Container>
    <InnerContainer fluid>
      <Page>
        <Column>
          <Flex flow="column">
            <Tag type={TextTypes.BODY_TINY} heavy color={colors.blue}>
              DEVELOPERS
            </Tag>
            <Title
              align="center"
              mt={3}
              mb={3}
              type={TextTypes.HEADING_2}
              color={colors.white}
            >
              {title}
            </Title>
            <Text
              align="center"
              type={TextTypes.BODY_LARGE}
              color={colors.white}
            >
              {subtitle}
            </Text>
          </Flex>
          <Benefits>
            {benefits.map(benefit => (
              <Column md={12 / benefits.length}>
                <Flex flow="column">
                  <BenefitImage src={benefit.image} />
                  <Text
                    mt={2}
                    mb={2}
                    type={TextTypes.BODY_LARGE}
                    heavy
                    color={colors.white}
                  >
                    {benefit.title}
                  </Text>
                  <Text
                    align="center"
                    type={TextTypes.BODY_SMALL}
                    color={colors.white}
                  >
                    {benefit.copy}
                  </Text>
                </Flex>
              </Column>
            ))}
          </Benefits>
          <Flex justifyContent="center">
            <Link
              type={LinkTypes.BUTTON_DEFAULT}
              to={ctaTo}
              icon={<AndroidArrowForward size={24} />}
              iconEnd
            >
              {ctaText}
            </Link>
          </Flex>
        </Column>
      </Page>
    </InnerContainer>
  </Container>
);

export default Demo;
