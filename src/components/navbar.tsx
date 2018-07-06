import React from 'react';
import { Sticky } from 'react-sticky';

import styled from 'styled-components';
import {
  Flex,
  Link,
  Text,
  configureGlobal,
  ph,
  pv,
  colors,
  boxShadow,
} from 'gather-style';

import Logo from './Logo';

configureGlobal();

const Container = styled(Flex)`
  ${ph(3)};
  ${pv(2)};
  background: ${colors.white};

  ${props =>
    props.isSticky &&
    `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  `};

  ${props =>
    props.showShadow &&
    `
    box-shadow: 0 1px 0 0 rgba(36, 18, 77, .05), 0 2px 16px -2px rgba(36, 18, 77, .1);
  `};
`;

const Navbar = ({ navbarData }) => (
  <Sticky>
    {({ distanceFromTop, isSticky }) => (
      <Container isSticky={isSticky} showShadow={distanceFromTop < 0}>
        <Logo />
        <Flex flex1 justifyContent="flex-end">
          {navbarData.links.map(link => (
            <Link
              key={link.label}
              exact
              title={link.label}
              isNavLink
              to={link.to && !link.to.startsWith('https') && link.to}
              href={link.href && link.href.startsWith('https') && link.href}
              type="text"
              mr={3}
            >
              {link.label}
            </Link>
          ))}
        </Flex>
        <Link type="buttonPrimary" href="https://app.gatherdata.co/signup">
          {navbarData.cta_text}
        </Link>
      </Container>
    )}
  </Sticky>
);

export default Navbar;
