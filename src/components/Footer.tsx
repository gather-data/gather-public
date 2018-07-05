import React from 'react';
import styled from 'styled-components';

import {
  Page,
  Row,
  Column,
  Flex,
  colors,
  Text,
  TextTypes,
  Link,
  LinkTypes,
  pv,
  pageSmallWidth,
} from 'gather-style';

import Logo from './Logo';

const Container = styled(Flex)`
  align-self: stretch;
  background: ${colors.purple};
  ${pv(6)};
`;

const LinksContainer = styled(Column)`
  display: flex;
  justify-content: flex-end;
`;

const Footer = ({ copyright, madeIn, linkGroups }) => (
  <Container>
    <Page width={pageSmallWidth}>
      <Row>
        <Column md={6}>
          <Flex flow="column" alignItems="flex-start">
            <Logo showName={false} />
            <Text
              color={colors.textWhiteFaded}
              mt={1}
              type={TextTypes.BODY_SMALL}
            >
              {copyright}
            </Text>
            <Text color={colors.textWhiteFaded} type={TextTypes.BODY_SMALL}>
              {madeIn}
            </Text>
          </Flex>
        </Column>
        <LinksContainer md={6} fluid>
          <Row>
            {linkGroups.map(linkGroup => (
              <Column md={4}>
                <Flex flow="Column" alignItems="flex-start">
                  <Text color={colors.white} mb={2} heavy type={TextTypes.BODY}>
                    {linkGroup.title}
                  </Text>
                  {linkGroup.links.map(link => (
                    <Link
                      color={colors.white}
                      type={LinkTypes.Text}
                      to={link.to}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Flex>
              </Column>
            ))}
          </Row>
        </LinksContainer>
      </Row>
    </Page>
  </Container>
);

export default Footer;
