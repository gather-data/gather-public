import React from 'react';

import Hero from './Hero';
import Demo from './Demo';
import Features from './Features';

const Home = ({ data: { homeJson: home } }) => (
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
      featureMagicActions={home.featureMagicAction}
      featureTimeline={home.featureTimeline}
      featureAnalytics={home.featureAnalytics}
    />
  </div>
);

export default Home;

export const query = graphql`
  query HomeQuery {
    homeJson {
      title
      ctaText
      trialText
      subtitle
      featureData {
        title
        copy
        tag
      }
      featurePrivacy {
        title
        copy
        tag
      }
      featureMagicActions {
        title
        copy
        tag
      }
      featureAnalytics {
        title
        copy
        tag
      }
      featureTimeline {
        title
        copy
        tag
      }
      customers {
        testimonial
        name
        job
        image
      }
      footerCta {
        title
        subtitle
        cta_text
      }
    }
  }
`;
