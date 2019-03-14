import React from 'react';
import styled from 'styled-components';
import { utils } from 'hedron';
import QuoteIcon from 'react-icons/lib/io/quote';

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
  mr,
  mt,
  Page,
  smallPageWidth,
  Flex,
  Row,
  Column,
  boxShadowBig,
  boxShadow,
} from 'gather-style';

import { splitTextWithHighlight } from '../../utils';
import Tag from '../Tag';

import customerImage from './customer-image.svg';

const Container = styled(Flex)`
  position: relative;
  overflow: hidden;
  ${pt(30)};
  ${pb(10)};

  ${utils.breakpoint(
    'md',
    () => `
      ${pt(20)()};
      ${pb(15)()};
    `
  )};
`;

const Background = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
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
  border-radius: 90px;
  overflow: hidden;
  height: 180px;
  width: 180px;
  margin: 0;
  ${mb(6)};

  ${boxShadowBig};

  ${utils.breakpoint(
    'md',
    () => `
      ${mr(10)()};
      ${mb(0)()};
    `
  )};
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

const QuoteContainer = styled(Flex)`
  ${mh(4)};

  ${utils.breakpoint(
    'md',
    () => `
      ${mh(0)};
    `
  )};
`;

const Quote = styled(Text)`
  position: relative;
`;

const StyledQuoteIcon = styled(QuoteIcon)`
  position: absolute;
  ${props =>
    props.after
      ? `
      right: -0;
      bottom: -0;
      transform: rotate(180deg);
    `
      : `
      left: -32px;
      top: -24px;
    `};
`;

const TestimonialContainer = styled(Flex)`
  flex-flow: column;

  ${utils.breakpoint(
    'md',
    () => `
      flex-flow: row;
    `
  )};
`;

const TitleContainer = styled.span`
  ${mt(3)};
  ${mb(4)};
  max-width: 520px;
  text-align: center;
`;

const Customers = ({ title, titleHighlight, testimonials }) => {
  const [first, second, last] = splitTextWithHighlight(title, titleHighlight);

  return (
    <Container flow="column">
      <Background
        viewBox="0 0 1440 866"
        version="1.1"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="linearGradient-1"
          >
            <stop stop-color="#FAFAFF" offset="0%" />
            <stop stop-color="#FFFFFF" offset="100%" />
          </linearGradient>
        </defs>
        <g id="Home-Copy" fill="url(#linearGradient-1)">
          <path
            d="M0,130.562773 C233.341032,67.5540244 511.81045,36.0496499 835.408254,36.0496499 C1159.00606,36.0496499 1360.53664,24.0331 1440,0 L1440,866 L0,866 L0,130.562773 Z"
            id="Rectangle-5"
          />
        </g>
      </Background>
      <InnerContainer width="860px">
        <Row>
          <Column>
            <Flex flow="column">
              <Tag type={TextTypes.BODY_TINY} heavy>
                CUSTOMERS
              </Tag>
              <TitleContainer>
                {first && (
                  <Text
                    color={colors.primary}
                    type={TextTypes.HEADING_3}
                    heavy={false}
                    inline
                  >
                    {first}
                  </Text>
                )}
                {second && (
                  <Text
                    color={colors.primary}
                    type={TextTypes.HEADING_3}
                    inline
                  >
                    {second}
                  </Text>
                )}
                {last && (
                  <Text
                    color={colors.primary}
                    type={TextTypes.HEADING_3}
                    heavy={false}
                    inline
                  >
                    {last}
                  </Text>
                )}
              </TitleContainer>
            </Flex>
          </Column>
        </Row>
        <Row>
          <Column>
            <TestimonialContainer>
              <Flex>
                <Photo src={testimonials[0].image} />
              </Flex>
              <QuoteContainer flow="column" alignItems="flex-start">
                <Quote color={colors.navy} mb={3} type={TextTypes.BODY}>
                  <StyledQuoteIcon color={colors.blue} />
                  {testimonials[0].testimonial}
                  <StyledQuoteIcon after color={colors.blue} />
                </Quote>
                <Text color={colors.navy} type={TextTypes.BODY} heavy>
                  {testimonials[0].name}
                </Text>
                <Text color={colors.navy60} type={TextTypes.BODY}>
                  {testimonials[0].job}
                </Text>
              </QuoteContainer>
            </TestimonialContainer>
          </Column>
        </Row>
      </InnerContainer>
    </Container>
  );
};

export default Customers;
