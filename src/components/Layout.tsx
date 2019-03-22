import React from 'react';
import Helmet from 'react-helmet';
import { BreakpointProvider } from 'hedron';
import { StickyContainer } from 'react-sticky';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { GlobalStyle } from 'gather-style';

import Navbar from '../components/navbar';

const GlobalContainer = styled.div`
  html {
    box-sizing: border-box;
    font-size: 10px;
    height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

const Layout = ({ children }) => (
  <>
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          navbarJson {
            ctaText
            ctaHref
            links {
              label
              to
            }
          }
        }
      `}
      render={data => (
        <BreakpointProvider breakpoints={{ sm: 768, md: 992, lg: 1200 }}>
          <GlobalContainer>
            <StickyContainer>
              <Navbar navbarData={data.navbarJson} />
              <div>{children}</div>
            </StickyContainer>
          </GlobalContainer>
        </BreakpointProvider>
      )}
    />
    <GlobalStyle />
  </>
);

export default Layout;
