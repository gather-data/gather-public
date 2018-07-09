import React from 'react';
import Helmet from 'react-helmet';
import { BreakpointProvider } from 'hedron';
import { StickyContainer } from 'react-sticky';

import Navbar from '../components/navbar';
import './index.css';

const Layout = ({ children, data }) => (
  <BreakpointProvider breakpoints={{ sm: 768, md: 992, lg: 1200 }}>
    <div>
      <StickyContainer>
        <Navbar navbarData={data.navbarJson} />
        <div>{children()}</div>
      </StickyContainer>
    </div>
  </BreakpointProvider>
);

export default Layout;

export const query = graphql`
  query LayoutQuery {
    navbarJson {
      ctaText
      links {
        label
        to
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
