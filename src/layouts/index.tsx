import React from 'react';
import Helmet from 'react-helmet';
import { BreakpointProvider } from 'hedron';
import { StickyContainer } from 'react-sticky';

import Navbar from '../components/navbar';
import './index.css';

const Layout = ({ children, data }) => (
  <BreakpointProvider breakpoints={{ sm: 768, md: 992, lg: 1200 }}>
    <div>
      <Helmet title={data.site.siteMetadata.title} />
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
      cta_text
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
