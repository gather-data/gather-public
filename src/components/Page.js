import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import {
  colors,
  mv,
  mt,
  mb,
  ph,
  pv,
  pb,
  pt,
  border,
  borderRadius,
  Text,
  TextTypes,
  TextTypeToStyle,
  Link,
  LinkTypes,
  LinkTypeToStyle,
  Page,
  pageSmallWidth,
  Flex,
} from 'gather-style';

import Tag from './Tag';

import Footer from './Footer';

const StyledPage = styled(Page)`
  ${pt(8)};
  ${pb(12)};
`;

const Divider = styled.div`
  height: 1px;
  background: ${colors.border};
  width: 100%;
  ${mv(6)};
`;

const Content = styled.div`
  ${TextTypeToStyle[TextTypes.BODY]};
  -webkit-font-smoothing: antialiased;
  color: ${colors.navy};
  ${mt(5)};

  & {
    img,
    video {
      height: auto;
      width: 100%;

      ${borderRadius};
      ${border};
      ${mv(3)};
    }

    code {
      background: ${colors.purple10};
      ${ph(0.25)};
      ${borderRadius};
      ${border};

      &::after {
        content: '';
      }
    }

    a {
      ${LinkTypeToStyle[LinkTypes.TEXT]};
    }

    h1 {
      color: ${colors.purple};
      ${TextTypeToStyle[TextTypes.HEADING_1]};
      font-weight: normal;
      ${mt(4)};
    }

    h2 {
      color: ${colors.purple};
      ${TextTypeToStyle[TextTypes.HEADING_2]};
      font-weight: normal;
      ${mt(4)};
    }

    h3 {
      color: ${colors.purple};
      ${TextTypeToStyle[TextTypes.HEADING_3]};
      font-weight: normal;
      ${mt(4)};
    }

    h4 {
      color: ${colors.purple};
      ${TextTypeToStyle[TextTypes.HEADING_4]};
      font-weight: normal;
      ${mt(4)};
    }
  }
`;

export default function Doc({ data, pathContext }) {
  const { markdownRemark: post } = data;
  const { footer } = pathContext;
  return (
    <div>
      <Helmet title={`${post.frontmatter.title} | Gather`} />
      <StyledPage width="660px">
        <Flex>
          <Link heavy to="/help">
            All help articles
          </Link>
          <Text ml={1}>/</Text>
          <Text ml={1}>{post.frontmatter.title}</Text>
        </Flex>
        <Text mt={3} mb={2} type={TextTypes.HEADING_1}>
          {post.frontmatter.title}
        </Text>
        <Tag color={colors.white} heavy type={TextTypes.BODY_SMALL}>
          {`${post.timeToRead} min read`}
        </Tag>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Content>
        <Divider />
        <Flex>
          <Link heavy to="/help">
            All help articles
          </Link>
          <Text ml={1}>/</Text>
          <Text ml={1}>{post.frontmatter.title}</Text>
        </Flex>
      </StyledPage>
      <Footer
        copyright={footer.copyright}
        madeIn={footer.madeIn}
        linkGroups={footer.linkGroups}
      />
    </div>
  );
}

export const pageQuery = graphql`
  query DocByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        path
        title
      }
    }
  }
`;
