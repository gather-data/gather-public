import React from 'react';
import styled from 'styled-components';
import { utils } from 'hedron';
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
  p,
  pb,
  mb,
} from 'gather-style';
import IOSEmail from 'react-icons/lib/io/ios-email';
import RSS from 'react-icons/lib/io/social-rss';
import Twitter from 'react-icons/lib/io/social-twitter';

import FooterCta from '../components/FooterCta';

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

  ${utils.breakpoint(
    'md',
    () => `
      order: 0;
    `
  )};
`;

const ContactColumn = styled(Column)`
  order: 0;
  ${p(1.5)};

  ${utils.breakpoint(
    'md',
    () => `
      order: 1;
    `
  )};
`;

const Box = styled.div`
  background: ${colors.purple10};
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  ${borderRadius};
  ${p(3)};

  &:not(:last-child) {
    ${mb(3)};
  }
`;

function groupBy(objectArray, getter) {
  return objectArray.reduce(function(acc, obj) {
    var key = getter(obj);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

const categoryOrders = ['Getting Started', 'Guides'];

function groupDocs(docs) {
  let groups = groupBy(docs.map(d => d.node), d => d.frontmatter.category);
  groups = Object.entries(groups);

  groups.sort(
    ([categoryA], [categoryB]) =>
      categoryOrders.indexOf(categoryA) - categoryOrders.indexOf(categoryB)
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
  <div>
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
        <ContentColumn sm={6}>
          {groupDocs(docs).map(([category, items]) => (
            <Box key={category}>
              <Text color={colors.navy} heavy mb={1}>
                {category}
              </Text>
              {items.map(item => (
                <Link mb={0.5} to={item.frontmatter.path}>
                  {item.frontmatter.title}
                </Link>
              ))}
            </Box>
          ))}
        </ContentColumn>
        <ContactColumn sm={6}>
          <Box>
            <Text color={colors.navy} heavy mb={1}>
              {help.contactUsTitle}
            </Text>
            <Text mb={2}>{help.contactUsText}</Text>
            <Link
              type={LinkTypes.BUTTON_PRIMARY}
              href={`mailto:${help.contactUsEmail}`}
              icon={<IOSEmail color={colors.white} size={24} />}
              target="_blank"
            >
              {help.contactUsCta}
            </Link>
          </Box>
          <Box>
            <Text color={colors.navy} heavy mb={1}>
              {help.blogTitle}
            </Text>
            <Text mb={2}>{help.blogText}</Text>
            <Link
              color="#029e74"
              type={LinkTypes.BUTTON_PRIMARY}
              href="https://blog.gatherdata.co"
              target="_blank"
              icon={<RSS color={colors.white} size={24} />}
            >
              {help.blogCta}
            </Link>
          </Box>
          <Box>
            <Text color={colors.navy} heavy mb={1}>
              {help.twitterTitle}
            </Text>
            <Text mb={2}>{help.twitterText}</Text>
            <Link
              color="#1da1f2"
              type={LinkTypes.BUTTON_PRIMARY}
              href={`https://twitter.com/gatherdataco`}
              icon={<Twitter color={colors.white} size={24} />}
              target="_blank"
            >
              {help.twitterCta}
            </Link>
          </Box>
        </ContactColumn>
      </Row>
    </Page>
    <FooterCta
      title={help.footerCta.title}
      subtitle={help.footerCta.subtitle}
      ctaText={help.footerCta.ctaText}
      copyright={footer.copyright}
      madeIn={footer.madeIn}
      linkGroups={footer.linkGroups}
    />
  </div>
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
      twitterText
      twitterCta
      twitterTitle
      footerCta {
        title
        subtitle
        ctaText
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            category
            _PARENT
            parent
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
