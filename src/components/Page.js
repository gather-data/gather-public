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
  p,
  border,
  borderRadius,
  boxShadowBig,
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

const Box = styled.div`
  background: ${colors.purple10};
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 100%;
  ${borderRadius};
  ${p(3)};

  &:not(:last-child) {
    ${mb(3)};
  }
`;

const Contents = styled(Box)`
  ${mt(3)};
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
      max-height: 500px;
      width: auto;
      max-width: 100%;

      ${borderRadius};
      ${boxShadowBig};
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

    h1,
    h2,
    h3,
    h4 {
      svg {
        fill: ${colors.purple};
        margin-bottom: 6px;
        transform: translate(-8px, 0);
      }
    }

    h1 {
      color: ${colors.purple};
      ${TextTypeToStyle[TextTypes.HEADING_1]};
      font-weight: bold;
      ${mt(4)};
    }

    h2 {
      color: ${colors.purple};
      ${TextTypeToStyle[TextTypes.HEADING_2]};
      font-weight: bold;
      ${mt(4)};
    }

    h3 {
      color: ${colors.purple};
      ${TextTypeToStyle[TextTypes.HEADING_3]};
      font-weight: normal;
      ${mt(2)};
    }

    h4 {
      color: ${colors.purple};
      ${TextTypeToStyle[TextTypes.HEADING_4]};
      font-weight: normal;
      ${mt(2)};
    }
  }
`;

export default function Doc({ data, pathContext }) {
  const {
    markdownRemark: post,
    allMarkdownRemark: otherPostsFromCategory,
  } = data;
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
        <Tag heavy type={TextTypes.BODY_TINY}>
          {`${post.timeToRead} min read`}
        </Tag>
        {Boolean(post.headings.length) && (
          <Contents>
            <Text color={colors.navy} heavy mb={1}>
              Contents
            </Text>
            {post.headings.map(heading => (
              <Link
                mb={0.5}
                to={`#${heading.value.toLowerCase().replace(' ', '-')}`}
              >
                {heading.value}
              </Link>
            ))}
          </Contents>
        )}
        <Content>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Content>
        <Divider />
        <Flex flow="column" alignItems="flex-start">
          <Flex>
            <Link mb={3} heavy to="/help">
              All help articles
            </Link>
            <Text mb={3} ml={1}>
              /
            </Text>
            <Text mb={3} ml={1}>
              {post.frontmatter.title}
            </Text>
          </Flex>
          <Box>
            <Text color={colors.navy} heavy mb={1}>
              {`More from ${post.frontmatter.category}`}
            </Text>
            {otherPostsFromCategory &&
              otherPostsFromCategory.edges.map(({ node: item }) => (
                <Link mb={0.5} to={item.frontmatter.path}>
                  {item.frontmatter.title}
                </Link>
              ))}
          </Box>
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
  query DocByPath($path: String!, $category: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      headings(depth: h2) {
        value
        depth
      }
      frontmatter {
        path
        title
        category
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: {
          category: { eq: $category }
          path: { ne: $path }
          published: { eq: true }
        }
      }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`;
