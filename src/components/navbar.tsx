import React from 'react';

import styled from 'styled-components';
import { Flex, Link, Text, configureGlobal, ph, pv } from 'gather-style';

import Logo from './Logo';

configureGlobal();

const Container = styled(Flex)`
  ${ph(3)};
  ${pv(2)};
`;

const Navbar = ({ navbarData }) => (
  <Container>
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
    <Link type="buttonPrimary" to="/signup">
      {navbarData.cta_text}
    </Link>
  </Container>
);

export default Navbar;
