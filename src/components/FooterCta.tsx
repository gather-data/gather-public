import React from 'react';
import styled from 'styled-components';

import { Flex, Text, TextTypes, Link, LinkTypes, pt, pb } from 'gather-style';

import Footer from './Footer';

const InnerContainer = styled(Flex)`
  ${pt(30)};
  ${pb(15)};
`;

import footerImage from './footer.svg';

const FooterImage = styled.img`
  margin: 0;
  transform: translate(0, 1px);
  width: 100%;
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
    <InnerContainer>
      <Flex alignItems="flex-start" flow="column">
        <Text type={TextTypes.HEADING_3}>{title}</Text>
        <Text type={TextTypes.BODY_SMALL}>{subtitle}</Text>
      </Flex>
      <Link
        ml={5}
        type={LinkTypes.BUTTON_PRIMARY}
        size="large"
        href="https://app.gatherdata.co/signup"
      >
        {ctaText}
      </Link>
    </InnerContainer>
    <FooterImage src={footerImage} />
    <Footer copyright={copyright} madeIn={madeIn} linkGroups={linkGroups} />
  </Flex>
);

export default FooterCta;
