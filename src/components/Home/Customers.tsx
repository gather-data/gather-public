import React from 'react';
import styled from 'styled-components';
import { utils } from 'hedron';

import {
  colors,
  Text,
  TextTypes,
  borderRadius,
  p,
  pt,
  pb,
  ph,
  mb,
  mh,
  Page,
  smallPageWidth,
  Flex,
  Row,
  Column,
  boxShadowBig,
} from 'gather-style';

import customerImage from './customer-image.svg';

const Container = styled(Flex)`
  background: ${colors.purple};
  ${pt(8)};
  ${mb(15)};
`;

const Testimonial = styled.div`
  background: ${colors.white};
  ${borderRadius};
  ${boxShadowBig};
  ${p(4)};
  ${mh(4)};

  ${utils.breakpoint(
    'md',
    () => `
      ${mh(10)()};
    `
  )};
`;

const InnerContainer = styled(Page)`
  display: flex;
  flex-flow: column;
  align-items: center;
  ${mb(-12)};

  ${utils.breakpoint(
    'md',
    () => `
      ${mb(-24)()};
    `
  )};
`;

const Title = styled(Text)`
  ${ph(4)};

  ${utils.breakpoint(
    'md',
    () => `
      ${ph(18)()};
    `
  )};
`;

const Photo = styled.img`
  border-radius: 42px;
  overflow: hidden;
  height: 84px;
  width: 84px;
  margin: 0;
`;

const CustomerImage = styled.img`
  margin: 0;
  display: none;

  ${utils.breakpoint(
    'md',
    () => `
      transform: translate(0, 45px);
      display: block;
      ${ph(0)()};
    `
  )};
`;

const Customers = ({ title, testimonials }) => (
  <Container flow="column">
    <InnerContainer width={smallPageWidth}>
      <Title
        mb={4}
        align="center"
        color={colors.white}
        type={TextTypes.HEADING_3}
        heavy={false}
      >
        {title}
      </Title>
      <Row>
        <Column>
          <Testimonial>
            <Text italic color={colors.navy} mb={3} type={TextTypes.BODY}>
              {testimonials[0].testimonial}
            </Text>
            <Flex>
              <Photo src={testimonials[0].image} />
              <Flex alignItems="flex-start" flow="column">
                <Text color={colors.navy} ml={2} type={TextTypes.BODY} heavy>
                  {testimonials[0].name}
                </Text>
                <Text color={colors.navy60} ml={2} type={TextTypes.BODY}>
                  {testimonials[0].job}
                </Text>
              </Flex>
            </Flex>
          </Testimonial>
        </Column>
      </Row>
    </InnerContainer>
    <CustomerImage src={customerImage} />
  </Container>
);

export default Customers;
