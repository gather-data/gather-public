import React, { Component } from 'react';
import styled from 'styled-components';
import Fuse from 'fuse.js';
import { utils } from 'hedron';
import AndroidArrowForward from 'react-icons/lib/io/android-arrow-forward';
import Helmet from 'react-helmet';
import sortBy from 'lodash/sortBy';

import {
  Column,
  Row,
  colors,
  mt,
  mb,
  Page,
  pageWidth,
  Text,
  TextTypes,
  maxWidth,
  Link,
  LinkTypes,
} from 'gather-style';

import Integrations from '../components/Integrations';
import Footer from '../components/Footer';

import integrationsBackgroundImage from './integrationsBackground.svg';

const Container = styled.div`
  min-height: 95vh;
  display: flex;
  flex-flow: column;
`;

const StyledPage = styled(Page)`
  flex: 1;
  ${mb(15)};

  ${utils.breakpoint(
    'sm',
    () => `
    ${mt(-5)()};
  `
  )};

  ${utils.breakpoint(
    'md',
    () => `
    ${mt(-10)()};
  `
  )};

  ${utils.breakpoint(
    'lg',
    () => `
    ${mt(-28)()};
  `
  )};
`;

const IntegrationsBackground = styled.img`
  width: 100%;
  pointer-events: none;
  z-index: -1;
`;

const TitleContainer = styled(Column)`
  display: flex;
  flex-flow: column;
  align-items: center;

  ${mt(10)};

  ${utils.breakpoint(
    'md',
    () => `
    ${mb(-10)()};
  `
  )};
`;

const Title = styled(Text)`
  ${maxWidth(60)};
`;

function groupBy(objectArray, property) {
  return objectArray.reduce(function(acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

class IntegrationsContainer extends Component {
  state = { category: null, query: '' };

  getServices = () => {
    const {
      data: {
        allGatherServices: { edges: servicesWithNodes },
      },
    } = this.props;

    let services = servicesWithNodes
      .map(sn => sn.node)
      .filter(s => s.show_marketing && s.name);

    // Create a service for each of its categories
    services = services
      .map(service =>
        service.categories.map(c => ({
          ...service,
          category: c,
        }))
      )
      .reduce((acc, val) => acc.concat(val), []);

    return services;
  };

  getCategories = () => {
    const services = this.getServices();
    const categoriesSet = new Set(
      services
        .map(service => service.categories)
        .reduce((acc, val) => acc.concat(val), [])
    );
    const categories = Array.from(categoriesSet);

    return categories;
  };

  getServiceGroups = () => {
    const { category, query } = this.state;
    let services = this.getServices();

    if (category) {
      services = services.filter(service => service.category === category);
    }

    if (query) {
      const fuse = new Fuse(services, {
        keys: ['name', 'description', 'categories'],
        threshold: 0.6,
      });
      services = fuse.search(query);
    }

    let serviceGroups = Object.entries(groupBy(services, 'category'));
    serviceGroups = sortBy(serviceGroups, ([category]) =>
      category.toLowerCase()
    );
    serviceGroups.sort(([categoryA], [categoryB]) => {
      if (categoryA === 'Popular') {
        return -1;
      }

      return 0;
    });
    return serviceGroups;
  };

  render() {
    const {
      data: { footerJson: footer, integrationsJson: integrations },
    } = this.props;
    const { query, category } = this.state;

    const categories = this.getCategories();
    const serviceGroups = this.getServiceGroups();

    return (
      <Container>
        <Helmet title={`Integrations | Gather`} />
        <TitleContainer>
          <Title align="center" mb={5} type={TextTypes.HEADING_1}>
            Integrations for all your data
          </Title>
          <Link
            type={LinkTypes.BUTTON_PRIMARY}
            href={integrations.ctaHref}
            iconEnd
            icon={<AndroidArrowForward size={24} />}
          >
            {integrations.ctaText}
          </Link>
          <Text color={colors.purple80} mt={2} type={TextTypes.BODY_SMALL}>
            14 day free trial, no credit card required.
          </Text>
        </TitleContainer>
        <IntegrationsBackground src={integrationsBackgroundImage} />
        <StyledPage width={pageWidth}>
          <Row>
            <Column>
              <Integrations
                serviceGroups={serviceGroups}
                categories={categories}
                query={query}
                updateQuery={q => this.setState({ query: q })}
                category={category}
                updateSelectedCategory={c => this.setState({ category: c })}
              />
            </Column>
          </Row>
        </StyledPage>
        <Footer
          copyright={footer.copyright}
          madeIn={footer.madeIn}
          linkGroups={footer.linkGroups}
        />
      </Container>
    );
  }
}

export default IntegrationsContainer;

export const query = graphql`
  query IntegrationsQuery {
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
    integrationsJson {
      ctaText
      ctaHref
    }
    allGatherServices {
      edges {
        node {
          name
          description
          categories
          type
          logo
          screenshot
          alternative_fields {
            alternative_id
            name
            input_type
            required
          }
          tutorials
          service
          enabled
          is_available
          show_marketing
          nodes {
            type
            name
            documentation
            supports_variable_inputs
            version
            upgrade_documentation
            use_input_as_outputs
          }
          flow_templates {
            alternative_id
            name
            description
          }
          brand_color
        }
      }
    }
  }
`;
