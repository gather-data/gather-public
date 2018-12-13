import React from 'react';
import styled from 'styled-components';
import { utils } from 'hedron';
import Helmet from 'react-helmet';
import {
  Text,
  TextTypes,
  Link,
  LinkTypes,
  Flex,
  pv,
  maxWidth,
  Column,
  Page,
  pageSmallWidth,
  Row,
  p,
  ph,
  mv,
  mb,
  borderRadius,
  colors,
  border,
  mt,
} from 'gather-style';
import IOSCheckmarkOutline from 'react-icons/lib/io/ios-checkmark-outline';

import FooterCta from '../components/FooterCta';

const TitleContainer = styled(Column)`
  ${pv(6)};
  display: flex;
  flex-flow: column;
  align-items: center;

  ${utils.breakpoint(
    'md',
    () => `
      ${pv(12)()};
    `
  )};
`;

const Title = styled(Text)`
  ${maxWidth(60)};
`;

const PricingBoxes = styled(Flex)`
  align-items: stretch;
  flex-flow: column;
  justify-content: stretch;
  width: 100%;

  ${utils.breakpoint(
    'md',
    () => `
      flex-flow: row;
      align-items: center;
    `
  )};
`;

const StandardBox = styled.div`
  ${borderRadius};
  background: ${colors.purple};
  ${pv(3)};
  ${ph(4)};
  ${mb(3)};
  flex: 1;

  ${utils.breakpoint(
    'md',
    () => `
      ${mb(0)()};
    `
  )};
`;

const EnterpriseBox = styled.div`
  ${borderRadius};
  ${border};
  ${pv(3)};
  ${ph(4)};
  flex: 1;
`;

const Divider = styled.div`
  margin: 0 -2rem;
  background: ${props => props.color || colors.white20};
  height: 1px;
  ${mv(3)};
`;

const Benefit = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;

  &:not(:last-child) {
    ${mb(2)};
  }
`;

const FAQs = styled(Flex)`
  ${mt(5)};

  ${utils.breakpoint(
    'md',
    () => `
      ${mt(15)()};
    `
  )};
`;

const Questions = styled(Row)`
  ${mt(8)};
`;

const Pricing = ({ data: { pricingJson: pricing, footerJson: footer } }) => {
  return (
    <div>
      <Helmet title={`Pricing | Gather`} />
      <Page width={pageSmallWidth}>
        <Row>
          <TitleContainer>
            <Title align="center" type={TextTypes.HEADING_1}>
              {pricing.title}
            </Title>
          </TitleContainer>
        </Row>
        <Row>
          <Column>
            <PricingBoxes>
              <StandardBox>
                <Text
                  color={colors.white}
                  type={TextTypes.HEADING_3}
                  heavy={false}
                >
                  Standard
                </Text>
                <Divider />
                <Flex alignItems="baseline">
                  <Text color={colors.white} type={TextTypes.HEADING_1}>
                    {`$${pricing.standard.pricePerMonth}`}
                  </Text>
                  <Text
                    color={colors.white}
                    ml={2}
                    mb={3}
                    type={TextTypes.BODY}
                  >
                    per user / month
                  </Text>
                </Flex>
                <Link
                  type={LinkTypes.BUTTON_PRIMARY}
                  textColor={colors.purple}
                  color={colors.white}
                  href={pricing.standard.ctaHref}
                  mb={3}
                  size="large"
                >
                  {pricing.standard.cta}
                </Link>
                <Flex alignItems="flex-start" flow="column">
                  {pricing.standard.benefits.map((benefit, index) => (
                    <Benefit>
                      <IOSCheckmarkOutline size={24} color={colors.blue} />
                      <Text color={colors.white} ml={1}>
                        {benefit.text}
                      </Text>
                    </Benefit>
                  ))}
                </Flex>
              </StandardBox>
              <EnterpriseBox>
                <Text type={TextTypes.HEADING_3} heavy={false}>
                  Enterprise
                </Text>
                <Divider color={colors.border} />
                <Flex alignItems="flex-start" flow="column">
                  {pricing.enterpise.benefits.map(benefit => (
                    <Benefit>
                      <IOSCheckmarkOutline size={24} color={colors.blue} />
                      <Text ml={1}>{benefit.text}</Text>
                    </Benefit>
                  ))}
                </Flex>
                <Link
                  mt={3}
                  type={LinkTypes.BUTTON_DEFAULT}
                  size="large"
                  href={pricing.enterpise.ctaHref}
                >
                  {pricing.enterpise.cta}
                </Link>
              </EnterpriseBox>
            </PricingBoxes>
          </Column>
        </Row>
        <Row>
          <Column>
            <FAQs flow="column">
              <Text align="center" type={TextTypes.HEADING_2}>
                Frequently Asked Questions
              </Text>
              <Flex>
                <Text>Have another question?</Text>
                <Link href="mailto:support@gatherdata.co" heavy ml={1}>
                  Let's talk
                </Link>
              </Flex>
              <Questions>
                {pricing.faqs.map(faq => (
                  <Column sm={6}>
                    <Text heavy mb={1}>
                      {faq.question}
                    </Text>
                    <Text color={colors.text}>{faq.answer}</Text>
                  </Column>
                ))}
              </Questions>
            </FAQs>
          </Column>
        </Row>
      </Page>
      <FooterCta
        title={pricing.footerCta.title}
        subtitle={pricing.footerCta.subtitle}
        ctaText={pricing.footerCta.ctaText}
        ctaHref={pricing.footerCta.ctaHref}
        copyright={footer.copyright}
        madeIn={footer.madeIn}
        linkGroups={footer.linkGroups}
      />
    </div>
  );
};

export default Pricing;

export const query = graphql`
  query PricingQuery {
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
    pricingJson {
      title
      standard {
        pricePerMonth
        cta
        ctaHref
        benefits {
          text
        }
      }
      enterpise {
        cta
        ctaHref
        benefits {
          text
        }
      }
      faqs {
        question
        answer
      }
      footerCta {
        title
        subtitle
        ctaText
        ctaHref
      }
    }
  }
`;
