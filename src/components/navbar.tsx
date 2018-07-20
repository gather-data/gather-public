import React, { Component } from 'react';
import { Sticky } from 'react-sticky';
import { utils } from 'hedron';
import onClickOutside from 'react-onclickoutside';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  Flex,
  Link,
  LinkTypes,
  Text,
  configureGlobal,
  ph,
  pv,
  colors,
  boxShadow,
  border,
  borderRadius,
  mb,
  mh,
  mt,
  p,
  pt,
  pb,
  mr,
  ml,
} from 'gather-style';
import AndroidArrowForward from 'react-icons/lib/io/android-arrow-forward';

import Logo from './Logo';

configureGlobal();

const Container = styled(Flex)`
  ${ph(3)};
  ${pv(2)};
  background: ${colors.white};
  position: relative;
  z-index: 1;

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

const MobileMenu = styled(Link)`
  ${utils.breakpoint(
    'md',
    () => `
    display: none;
  `
  )};
`;

const Items = styled(Flex)`
  flex-flow: column;
  display: none;

  ${utils.breakpoint(
    'md',
    () => `
      flex-flow: row;
      display: flex;
    `
  )};
`;

const MobileItems = styled(Flex)`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  position: absolute;
  background: ${colors.white};
  top: ${props => (props.isSticky ? '86px' : '70px')};
  right: 24px;
  ${borderRadius};
  ${border};
  ${boxShadow};
  ${ph(3)};
  ${pt(3)};
  ${pb(1)};

  ${utils.breakpoint(
    'md',
    () => `
      display: none;
    `
  )};
`;

const NavLink = styled(Link)`
  margin: 0;
  ${mb(2)};

  &:last-child {
    ${mt(1)};
  }
  border-bottom: 0;

  &.active,
  &:hover {
    border-bottom: 0;
  }

  ${utils.breakpoint(
    'md',
    () => `
      ${mb(0)()};
      ${mr(2)()};
      width: max-content;
      &:last-child {
        ${mt(0)()};
        ${ml(2)()};
      }
    `
  )};
`;

const StyledLogo = styled(Logo)`
  flex: 1;
  justify-content: flex-start;
`;

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleClickOutside = evt => {
    this.setState({ isOpen: false });
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    const { navbarData } = this.props;
    const { isOpen } = this.state;

    const links = [
      ...navbarData.links.map(link => (
        <NavLink
          key={link.label}
          exact
          title={link.label}
          isNavLink
          to={link.to && !link.to.startsWith('https') && link.to}
          href={link.to && link.to.startsWith('https') && link.to}
          type="text"
          mr={3}
          color={colors.navy}
        >
          {link.label}
        </NavLink>
      )),
      <NavLink
        type="buttonPrimary"
        href="https://app.gatherdata.co/signup"
        iconEnd
        icon={<AndroidArrowForward size={24} />}
      >
        {navbarData.ctaText}
      </NavLink>,
    ];

    return (
      <Sticky>
        {({ distanceFromTop, isSticky }) => (
          <Container
            alignItems="stretch"
            flow="column"
            isSticky={isSticky}
            showShadow={distanceFromTop < 0}
          >
            <Flex alignItems="center">
              <StyledLogo />
              <MobileMenu
                href="https://app.gatherdata.co/signup"
                mr={2}
                type={LinkTypes.BUTTON_PRIMARY}
              >
                {navbarData.ctaText}
              </MobileMenu>
              <MobileMenu
                onClick={() => this.setState({ isOpen: !isOpen })}
                type={LinkTypes.BUTTON_DEFAULT}
              >
                Menu
              </MobileMenu>
              <Items isOpen={isOpen} flex1 justifyContent="flex-end">
                {links}
              </Items>
            </Flex>
            <MobileItems isSticky={isSticky} isOpen={isOpen} flow="column">
              {links}
            </MobileItems>
          </Container>
        )}
      </Sticky>
    );
  }
}

export default withRouter(onClickOutside(Navbar));
