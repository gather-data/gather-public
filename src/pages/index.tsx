import React from 'react';

import FooterCta from '../components/FooterCta';

import Hero from '../components/Home/Hero';
import Demo from '../components/Home/Demo';
import Features from '../components/Home/Features';
import Customers from '../components/Home/Customers';

const Home = ({ data: { homeJson: home, footerJson: footer } }) => (
  <div>
    <Hero
      title={home.title}
      subtitle={home.subtitle}
      cta_text={home.ctaText}
      trial_text={home.trialText}
    />
    <Demo />
    <Features
      featureData={home.featureData}
      featurePrivacy={home.featurePrivacy}
      featureMagicActions={home.featureMagicActions}
      featureTimeline={home.featureTimeline}
      featureAnalytics={home.featureAnalytics}
    />
    <Customers
      title={home.customers.title}
      testimonials={home.customers.testimonials}
    />
    <FooterCta
      title={home.footerCta.title}
      subtitle={home.footerCta.subtitle}
      ctaText={home.footerCta.ctaText}
      copyright={footer.copyright}
      madeIn={footer.madeIn}
      linkGroups={footer.linkGroups}
    />
  </div>
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
      ctaText
      trialText
      subtitle
      featureData {
        title
        copy
        tag
        ctaText
        ctaTo
      }
      featurePrivacy {
        title
        copy
        tag
        ctaText
        ctaTo
      }
      featureMagicActions {
        title
        copy
        tag
        ctaText
        ctaTo
      }
      featureAnalytics {
        title
        copy
        tag
        ctaText
        ctaTo
      }
      featureTimeline {
        title
        copy
        tag
        ctaText
        ctaTo
      }
      customers {
        title
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
      }
    }
  }
`;
