import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import {
  colors,
  mv,
  mt,
  mb,
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
  Column,
  pageSmallWidth,
  Flex,
  Row,
} from 'gather-style';

import Layout from '../components/Layout';
import Tag from '../components/Tag';
import Footer from '../components/Footer';

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

const LeftContainer = styled.div`
  position: sticky;
  top: 102px;
`;

const Contents = styled(Box)``;

const Content = styled.div`
  ${TextTypeToStyle[TextTypes.BODY]};
  -webkit-font-smoothing: antialiased;
  color: ${colors.navy};
  ${mt(3)};

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

    a {
      ${LinkTypeToStyle[LinkTypes.TEXT]};

      &:hover {
        text-decoration: underline;
      }
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
      ${mb(2)};
    }

    h3 {
      color: ${colors.purple};
      ${TextTypeToStyle[TextTypes.HEADING_3]};
      font-weight: normal;
      ${mt(4)};
      ${mb(2)};
    }

    h4 {
      color: ${colors.purple};
      ${TextTypeToStyle[TextTypes.HEADING_4]};
      font-weight: normal;
      ${mt(4)};
      ${mb(2)};
    }
  }
`;

const BreadcrumbText = styled(Text)`
  white-space: nowrap;
`;

const BreadcrumbLink = styled(Link)`
  white-space: nowrap;
`;

const CategoryArticleText = styled(Text)`
  max-width: 100%;
`;

const CategoryArticleLink = styled(Link)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  display: block;
`;

export default function Doc({ data, pageContext }) {
  const {
    markdownRemark: post,
    allMarkdownRemark: otherPostsFromCategory,
  } = data;
  const { footer } = pageContext;
  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | Gather`} />
      <StyledPage width={pageSmallWidth}>
        <Row>
          <Column md={4}>
            <LeftContainer>
              <Box>
                <Text
                  color={colors.navy}
                  heavy
                  mb={1}
                  type={TextTypes.BODY_SMALL}
                  uppercase
                >
                  {post.frontmatter.collection}
                </Text>
                {otherPostsFromCategory &&
                  otherPostsFromCategory.edges.map(({ node: item }) =>
                    item.frontmatter.path.includes(post.frontmatter.path) ? (
                      <CategoryArticleText
                        truncate
                        mb={0.5}
                        to={item.frontmatter.path}
                        heavy
                      >
                        {item.frontmatter.title}
                      </CategoryArticleText>
                    ) : (
                      <CategoryArticleLink
                        mb={0.5}
                        to={item.frontmatter.path}
                        useReachRouter
                      >
                        {item.frontmatter.title}
                      </CategoryArticleLink>
                    )
                  )}
              </Box>
              {Boolean(post.headings.length) && (
                <Contents>
                  <Text
                    uppercase
                    color={colors.navy}
                    heavy
                    mb={1}
                    type={TextTypes.BODY_SMALL}
                  >
                    Contents
                  </Text>
                  {post.headings.map(heading => (
                    <Link
                      mb={0.5}
                      to={`#${heading.value.toLowerCase().replace(/ /g, '-')}`}
                      useReachRouter
                    >
                      {heading.value}
                    </Link>
                  ))}
                </Contents>
              )}
              <Text mt={3} ml={3}>
                <Text inline>Noticed an error?</Text>
                <Link
                  inline
                  ml={1}
                  href="mailto:support@gatherdata.co"
                  useReachRouter
                >
                  Let us know
                </Link>
              </Text>
            </LeftContainer>
          </Column>
          <Column md={8}>
            <Flex>
              <BreadcrumbLink heavy to="/help" useReachRouter>
                All articles
              </BreadcrumbLink>
              <Text ml={1}>/</Text>
              <BreadcrumbLink
                heavy
                to={`/help#${post.frontmatter.collection}`}
                ml={1}
                useReachRouter
              >
                {post.frontmatter.collection}
              </BreadcrumbLink>
              <Text ml={1}>/</Text>
              <BreadcrumbText truncate ml={1}>
                {post.frontmatter.title}
              </BreadcrumbText>
            </Flex>
            <Text mt={3} mb={2} type={TextTypes.HEADING_1}>
              {post.frontmatter.title}
            </Text>
            <Tag heavy type={TextTypes.BODY_TINY}>
              {`${post.timeToRead} min read`}
            </Tag>
            <Content>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Content>
            <Divider />
            <Flex flow="column" alignItems="flex-start">
              <Flex>
                <Link mb={3} heavy to="/help" useReachRouter>
                  All help articles
                </Link>
                <Text mb={3} ml={1}>
                  /
                </Text>
                <Text mb={3} ml={1}>
                  {post.frontmatter.title}
                </Text>
              </Flex>
            </Flex>
          </Column>
        </Row>
      </StyledPage>
      <Footer
        copyright={footer.copyright}
        madeIn={footer.madeIn}
        linkGroups={footer.linkGroups}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query DocByPath($path: String!, $collection: String!) {
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
        collection
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: {
          collection: { eq: $collection }
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
