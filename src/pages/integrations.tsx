import React, { Component } from 'react';
import styled from 'styled-components';
import Fuse from 'fuse.js';
import { utils } from 'hedron';

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
    'md',
    () => `
    ${mt(-30)()};
  `
  )};
`;

const IntegrationsBackground = styled.img`
  width: 100%;
  pointer-events: none;
`;

const TitleContainer = styled(Column)`
  display: flex;
  flex-flow: column;
  align-items: center;

  ${mt(10)};

  ${utils.breakpoint(
    'md',
    () => `
    ${mb(-5)};
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
  state = { category: '', query: '' };

  getServices = () => {
    const {
      data: {
        allGatherServices: { edges: servicesWithNodes },
      },
    } = this.props;

    let services = servicesWithNodes.map(sn => sn.node).filter(s => s.name);

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

    const serviceGroups = groupBy(services, 'category');
    return serviceGroups;
  };

  render() {
    const {
      data: { footerJson: footer },
    } = this.props;
    const { query, category } = this.state;

    const categories = this.getCategories();
    const serviceGroups = this.getServiceGroups();

    return (
      <Container>
        <TitleContainer>
          <Title align="center" mb={5} type={TextTypes.HEADING_1}>
            Integrations for all your data
          </Title>
          <Link
            type={LinkTypes.BUTTON_PRIMARY}
            href="https://app.gatherdata.co/signup"
          >
            Free Trial
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
