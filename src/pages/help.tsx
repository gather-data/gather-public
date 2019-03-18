import React from 'react';
import styled from 'styled-components';
import { utils as hedronUtils } from 'hedron';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import {
  Text,
  TextTypes,
  Link,
  LinkTypes,
  colors,
  Row,
  Column,
  Page,
  pageSmallWidth,
  mt,
  borderRadius,
  boxShadow,
  p,
  pb,
  mb,
  border,
  Flex,
} from 'gather-style';
import IOSEmail from 'react-icons/lib/io/ios-email';
import ArrowRight from 'react-icons/lib/io/arrow-right-c';
import RSS from 'react-icons/lib/io/social-rss';
import Twitter from 'react-icons/lib/io/social-twitter';
import groupBy from 'lodash/groupBy';

import Layout from '../components/Layout';
import Tag from '../components/Tag';
import FooterCta from '../components/FooterCta';
import Footer from '../components/Footer';
import * as utils from '../services/auth';

const TitleContainer = styled(Column)`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  ${mt(10)};
`;

const ContentColumn = styled(Column)`
  order: 1;
  ${p(1.5)};

  ${hedronUtils.breakpoint(
    'md',
    () => `
      ${pb(10)()};
      order: 0;
    `
  )};
`;

const ContactColumn = styled(Column)`
  order: 0;
  ${p(1.5)};

  ${hedronUtils.breakpoint(
    'md',
    () => `
      order: 1;
    `
  )};
`;

const CollectionBox = styled.div`
  background: ${colors.purple5};
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  border: 1px solid ${colors.purple10};

  ${borderRadius};
  ${p(3)};

  &:not(:last-child) {
    ${mb(3)};
  }
`;

const BoxRight = styled.div`
  border: 1px solid ${colors.navy10};
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  ${borderRadius};
  ${p(3)};

  &:not(:last-child) {
    ${mb(3)};
  }
`;

const Category = styled(Flex)`
  &:not(:last-child) {
    ${mb(2)};
  }
`;

interface CollectionLink {
  label: string;
  category: string;
  href?: string;
  to?: string;
}

interface Category {
  name: string;
  links: CollectionLink[];
}

interface Collection {
  name: string;
  description: string;
  links: CollectionLink[];
  categories: Category[];
}

interface DocNode {
  frontmatter: {
    collection: string;
    category: string;
    path: string;
    title: string;
  };
}

interface Doc {
  node: DocNode;
}

function groupDocs(docs: Doc[], collections: Collection[]) {
  const collectionNames = collections.map(info => info.name);

  const groups: Collection[] = Object.entries(
    groupBy(docs.map(d => d.node), (d: DocNode) => d.frontmatter.collection)
  )
    .map(([name, links]) => ({ name, links }))
    .filter(group => collectionNames.includes(group.name))
    .map(group => {
      const info = collections.find(i => i.name === group.name);

      let newItems: CollectionLink[] = group.links.map(item => ({
        to: item.frontmatter.path,
        label: item.frontmatter.title,
        category: item.frontmatter.category,
      }));

      newItems = newItems.concat((info ? info.links : []) || []);

      const categories = Object.entries(
        groupBy(newItems, link => link.category || '')
      )
        .map(([categoryName, links]) => ({ name: categoryName, links }))
        .sort((categoryA, categoryB) => {
          if (!categoryA.name) {
            return -1;
          }

          if (!info) {
            return -1;
          }

          return (
            info.categories.findIndex(c => c.name === categoryA.name) -
            info.categories.findIndex(c => c.name === categoryB.name)
          );
        });

      return {
        name: group.name,
        links: newItems,
        categories,
        description: info ? info.description : '',
      };
    })
    .sort(
      (groupA, groupB) =>
        collections.findIndex(info => info.name === groupA.name) -
        collections.findIndex(info => info.name === groupB.name)
    );

  return groups;
}

const Help = ({
  data: {
    helpJson: help,
    footerJson: footer,
    allMarkdownRemark: { edges: docs },
  },
}) => (
  <Layout>
    <Helmet title={`Help | Gather`} />
    <Page width={pageSmallWidth}>
      <Row>
        <TitleContainer>
          <Text mb={1} type={TextTypes.HEADING_1}>
            {help.title}
          </Text>
          <Text>{help.subtitle}</Text>
        </TitleContainer>
      </Row>
      <Row>
        <ContentColumn sm={8}>
          {groupDocs(docs, help.collections).map(collection => (
            <CollectionBox key={collection.name} id={collection.name}>
              <Text
                color={colors.navy}
                heavy
                mb={collection.description ? 1 : 2}
                type={TextTypes.BODY_LARGE}
              >
                {collection.name}
              </Text>
              {collection.description && (
                <Text color={colors.navy} mb={2} type={TextTypes.BODY_SMALL}>
                  {collection.description}
                </Text>
              )}
              {collection.categories.map(category => (
                <Category flow="column" alignItems="flex-start">
                  <Text
                    heavy
                    type={TextTypes.BODY_SMALL}
                    uppercase
                    color={colors.navy}
                    mb={0.5}
                  >
                    {category.name}
                  </Text>
                  {category.links.map(link => (
                    <Link
                      mb={0.5}
                      to={link.to}
                      href={link.href}
                      icon={link.href && <ArrowRight />}
                      iconEnd
                      useReachRouter
                    >
                      {link.label}
                    </Link>
                  ))}
                </Category>
              ))}
            </CollectionBox>
          ))}
        </ContentColumn>
        <ContactColumn sm={4}>
          <BoxRight>
            <Text color={colors.navy} heavy mb={1}>
              {help.contactUsTitle}
            </Text>
            <Text mb={2}>{help.contactUsText}</Text>
            <Link
              linkType={LinkTypes.BUTTON_PRIMARY}
              useReachRouter
              href={`mailto:${help.contactUsEmail}`}
              icon={<IOSEmail color={colors.white} size={24} />}
              target="_blank"
            >
              {help.contactUsCta}
            </Link>
          </BoxRight>
          {help.showBlog && (
            <BoxRight>
              <Text color={colors.navy} heavy mb={1}>
                {help.blogTitle}
              </Text>
              <Text mb={2}>{help.blogText}</Text>
              <Link
                color="#029e74"
                linkType={LinkTypes.BUTTON_PRIMARY}
                useReachRouter
                href="https://blog.gatherdata.co"
                target="_blank"
                icon={<RSS color={colors.white} size={24} />}
              >
                {help.blogCta}
              </Link>
            </BoxRight>
          )}
          <BoxRight>
            <Text color={colors.navy} heavy mb={1}>
              {help.twitterTitle}
            </Text>
            <Text mb={2}>{help.twitterText}</Text>
            <Link
              color="#1da1f2"
              linkType={LinkTypes.BUTTON_PRIMARY}
              useReachRouter
              href={`https://twitter.com/gatherdataco`}
              icon={<Twitter color={colors.white} size={24} />}
              target="_blank"
            >
              {help.twitterCta}
            </Link>
          </BoxRight>
        </ContactColumn>
      </Row>
    </Page>
    {utils.isLoggedIn() ? (
      <Footer
        copyright={footer.copyright}
        madeIn={footer.madeIn}
        linkGroups={footer.linkGroups}
      />
    ) : (
      <FooterCta
        title={help.footerCta.title}
        subtitle={help.footerCta.subtitle}
        ctaText={help.footerCta.ctaText}
        ctaHref={help.footerCta.ctaHref}
        copyright={footer.copyright}
        madeIn={footer.madeIn}
        linkGroups={footer.linkGroups}
      />
    )}
  </Layout>
);

export default Help;

export const query = graphql`
  query HelpQuery {
    footerJson {
      copyright
      madeIn
      linkGroups {
        title
        links {
          label
          to
        }
      }
    }
    helpJson {
      title
      subtitle
      contactUsTitle
      contactUsText
      contactUsEmail
      contactUsCta
      blogText
      blogCta
      blogTitle
      showBlog
      twitterText
      twitterCta
      twitterTitle
      footerCta {
        title
        subtitle
        ctaText
        ctaHref
      }
      collections {
        name
        description
        links {
          label
          href
        }
        categories {
          name
        }
      }
    }
    allMarkdownRemark(filter: { frontmatter: { published: { eq: true } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            collection
            category
          }
          html
          timeToRead
          wordCount {
            paragraphs
            sentences
            words
          }
        }
      }
    }
  }
`;
