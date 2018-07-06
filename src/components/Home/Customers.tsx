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
  Page,
  smallPageWidth,
  Flex,
  Row,
  Column,
} from 'gather-style';

import customerImage from './customer-image.svg';

const Container = styled(Flex)`
  background: ${colors.purple};
  ${pt(10)};
  ${mb(10)};
`;

const Testimonial = styled.div`
  background: ${colors.white};
  ${borderRadius};
  ${p(6)};
`;

const InnerContainer = styled(Page)`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Title = styled(Text)`
  ${utils.breakpoint(
    'md',
    () => `
      ${ph(12)()};
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
  transform: translate(0, 30px);
  ${ph(3)};

  ${utils.breakpoint(
    'md',
    () => `
      transform: translate(0, 80px);
      ${ph(0)()};
    `
  )};
`;

const Customers = ({ title, testimonials }) => (
  <Container flow="column">
    <InnerContainer width={smallPageWidth}>
      <Title
        mb={10}
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
            <Text italic color={colors.navy} mb={6} type={TextTypes.BODY_LARGE}>
              {testimonials[0].testimonial}
            </Text>
            <Flex>
              <Photo src={testimonials[0].image} />
              <Flex alignItems="flex-start" flow="column">
                <Text
                  color={colors.navy60}
                  ml={3}
                  type={TextTypes.BODY_LARGE}
                  heavy
                >
                  {testimonials[0].name}
                </Text>
                <Text color={colors.navy60} ml={3} type={TextTypes.BODY}>
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
