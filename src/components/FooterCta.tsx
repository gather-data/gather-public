import React from 'react';
import styled from 'styled-components';
import { utils } from 'hedron';
import AndroidArrowForward from 'react-icons/lib/io/android-arrow-forward';

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
  mt,
  pv,
  ph,
  colors,
  boxShadow,
  borderRadius,
  Page,
  Column,
  Row,
  pageSmallWidth,
} from 'gather-style';

import Footer from './Footer';
import footerImage from './footer.svg';

const InnerContainer = styled(Flex)`
  ${mt(14)};
  ${mb(7)};
  ${pv(6)};
  ${ph(3)};
  ${borderRadius} ${boxShadow}
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  background: ${colors.purple};

  ${utils.breakpoint(
    'md',
    () => `
      ${mt(30)()};
      ${mb(20)()};
      flex-flow: row;
    `
  )};
`;

const FooterImage = styled.img`
  margin: 0;
  transform: translate(0, 2px) scaley(1.01);
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
    <Page width={pageSmallWidth}>
      <Row>
        <Column>
          <InnerContainer>
            <TextContainer alignItems="flex-start" flow="column">
              <Text color={colors.white} type={TextTypes.HEADING_3}>
                {title}
              </Text>
              <Text color={colors.textWhiteFaded} type={TextTypes.BODY_SMALL}>
                {subtitle}
              </Text>
            </TextContainer>
            <CtaLink
              type={LinkTypes.BUTTON_PRIMARY}
              size="large"
              href="https://app.gatherdata.co/signup"
              iconEnd
              icon={<AndroidArrowForward size={24} />}
              color={colors.white}
              textColor={colors.primary}
            >
              {ctaText}
            </CtaLink>
          </InnerContainer>
        </Column>
      </Row>
    </Page>
    <Footer copyright={copyright} madeIn={madeIn} linkGroups={linkGroups} />
  </Flex>
);

export default FooterCta;
