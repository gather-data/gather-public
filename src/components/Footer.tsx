import React from 'react';
import styled from 'styled-components';
import { utils } from 'hedron';

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
  ${pv(6)};
`;

const LinkGroupsContainer = styled(Column)`
  display: flex;
  justify-content: flex-end;
`;

const LinksContainer = styled(Flex)`
  align-items: center;

  ${utils.breakpoint(
    'md',
    () => `
    align-items: flex-start;
  `
  )};
`;

const CompanyContainer = styled(Flex)`
  align-items: center;

  ${utils.breakpoint(
    'md',
    () => `
    align-items: flex-start;
  `
  )};
`;

const LinkGroupsInner = styled(Row)`
  width: 100%;
`;

const Footer = ({ copyright, madeIn, linkGroups }) => (
  <Container>
    <Page width={pageSmallWidth}>
      <Row>
        <Column md={6}>
          <CompanyContainer flow="column" alignItems="flex-start">
            <Logo showName={false} />
            <Text color={colors.navy60} mt={2} type={TextTypes.BODY_SMALL}>
              {copyright}
            </Text>
            <Text color={colors.navy60} type={TextTypes.BODY_SMALL}>
              {madeIn}
            </Text>
          </CompanyContainer>
        </Column>
        <LinkGroupsContainer md={6} fluid>
          <LinkGroupsInner>
            {linkGroups.map(linkGroup => (
              <Column md={4}>
                <LinksContainer flow="Column" alignItems="flex-start">
                  <Text mb={1} heavy type={TextTypes.BODY}>
                    {linkGroup.title}
                  </Text>
                  {linkGroup.links.map(link => (
                    <Link type={LinkTypes.Text} to={link.to}>
                      {link.label}
                    </Link>
                  ))}
                </LinksContainer>
              </Column>
            ))}
          </LinkGroupsInner>
        </LinkGroupsContainer>
      </Row>
    </Page>
  </Container>
);

export default Footer;
