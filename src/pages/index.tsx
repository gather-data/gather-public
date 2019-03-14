import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import FooterCta from '../components/FooterCta';
import Layout from '../components/Layout';

import Hero from '../components/Home/Hero';
import Demo from '../components/Home/Demo';
import Features from '../components/Home/Features';
import Developers from '../components/Home/Developers';
import Customers from '../components/Home/Customers';
import WorksWith from '../components/Home/WorksWith';
import Techstars from '../components/Home/Techstars';

const Home = ({
  data: {
    homeJson: home,
    footerJson: footer,
    allGatherServices: { edges: servicesWithNodes },
  },
}) => (
  <Layout>
    <Helmet title={`Gather | ${home.title}`} />
    <Hero
      title={home.title}
      titleHighlight={home.titleHighlight}
      subtitle={home.subtitle}
      ctaText={home.ctaText}
      ctaHref={home.ctaHref}
      trialText={home.trialText}
      newItem={home.newItem}
    />
    <Techstars />
    <Demo />
    <WorksWith services={servicesWithNodes.map(sn => sn.node)} />
    <Features
      title={home.features.title}
      subtitle={home.features.subtitle}
      featureDataEngine={home.features.featureDataEngine}
      featureIQ={home.features.featureIQ}
      featureOrchestrate={home.features.featureOrchestrate}
    />
    <Customers
      title={home.customers.title}
      titleHighlight={home.customers.titleHighlight}
      testimonials={home.customers.testimonials}
    />
    <Developers
      title={home.developers.title}
      subtitle={home.developers.subtitle}
      benefits={home.developers.benefits}
      ctaText={home.developers.ctaText}
      ctaTo={home.developers.ctaTo}
      codeSamples={home.developers.codeSamples}
    />
    <FooterCta
      title={home.footerCta.title}
      subtitle={home.footerCta.subtitle}
      ctaText={home.footerCta.ctaText}
      ctaHref={home.footerCta.ctaHref}
      copyright={footer.copyright}
      madeIn={footer.madeIn}
      linkGroups={footer.linkGroups}
    />
  </Layout>
);

export default Home;

export const query = graphql`
  query HomeQuery {
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
    homeJson {
      title
      titleHighlight
      ctaText
      ctaHref
      trialText
      subtitle
      newItem {
        newText
        newHref
        newLabel
      }
      features {
        title
        subtitle
        featureDataEngine {
          title
          copy
          benefits {
            title
          }
        }
        featureIQ {
          title
          copy
          benefits {
            title
          }
        }
        featureOrchestrate {
          title
          copy
          benefits {
            title
          }
        }
      }
      customers {
        title
        titleHighlight
        testimonials {
          testimonial
          name
          job
          image
        }
      }
      footerCta {
        title
        subtitle
        ctaText
        ctaHref
      }
      developers {
        title
        subtitle
        ctaText
        ctaTo
        benefits {
          title
        }
        codeSamples {
          title
          code
          language
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
