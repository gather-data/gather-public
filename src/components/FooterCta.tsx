import React from 'react';
import styled from 'styled-components';
import { utils } from 'hedron';

import {
  Flex,
  Text,
  TextTypes,
  Link,
  LinkTypes,
  pt,
  pb,
  ml,
  mb,
  Column,
} from 'gather-style';

import Footer from './Footer';
import footerImage from './footer.svg';

const InnerContainer = styled(Flex)`
  ${pt(20)};
  ${pb(14)};
  flex-flow: column;
  align-items: center;
  justify-content: center;

  ${utils.breakpoint(
    'md',
    () => `
      ${pt(30)()};
      ${pb(15)()};
      flex-flow: row;
    `
  )};
`;

const FooterImage = styled.img`
  margin: 0;
  transform: translate(0, 1px);
  width: 100%;
`;

const CtaLink = styled(Link)`
  ${utils.breakpoint(
    'md',
    () => `
      ${ml(5)()};
    `
  )};
`;

const TextContainer = styled(Flex)`
  align-items: center;
  ${mb(3)};

  ${utils.breakpoint(
    'md',
    () => `
      align-items: flex-start;
      ${mb(0)()};
    `
  )};
`;

const FooterCta = ({
  title,
  subtitle,
  ctaText,
  copyright,
  madeIn,
  linkGroups,
}) => (
  <Flex flow="column">
    <Column>
      <InnerContainer>
        <TextContainer alignItems="flex-start" flow="column">
          <Text type={TextTypes.HEADING_3}>{title}</Text>
          <Text type={TextTypes.BODY_SMALL}>{subtitle}</Text>
        </TextContainer>
        <CtaLink
          type={LinkTypes.BUTTON_PRIMARY}
          size="large"
          href="https://app.gatherdata.co/signup"
        >
          {ctaText}
        </CtaLink>
      </InnerContainer>
    </Column>
    <FooterImage src={footerImage} />
    <Footer copyright={copyright} madeIn={madeIn} linkGroups={linkGroups} />
  </Flex>
);

export default FooterCta;
