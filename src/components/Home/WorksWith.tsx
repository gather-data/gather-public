import * as React from 'react';
import { utils } from 'hedron';
import { Link as GatsbyLink } from 'gatsby';
import {
  Text,
  TextTypes,
  Flex,
  boxShadow,
  colors,
  border,
  borderRadius,
  Page,
  pageWidth,
  Row,
  Column,
  pv,
  mb,
  mr,
  pt,
  pb,
  maxHeight,
  maxWidth,
  transition,
} from 'gather-style';
import styled, { keyframes } from 'styled-components';

import Tag from '../Tag';

const Container = styled.div`
  overflow-x: hidden;
  background-image: linear-gradient(
    -167deg,
    #ffffff 0%,
    #ffffff 25%,
    #fafaff 61%
  );

  ${pt(15)};
  ${pb(10)()};

  ${utils.breakpoint(
    'md',
    () => `
    ${pt(30)()};
    ${pb(15)()};
  `
  )};
`;

const animateUpAndDown = keyframes`
  0% {
    transform: translate(0%, 0%);
  }

  25% {
    transform: translate(0%, 20%);
  }

  75% {
    transform: translate(0%, -20%);
  }

  100% {
    transform: translate(0%, 0%);
  }
`;

const Box = styled(Flex)`
  ${borderRadius};
  ${boxShadow};

  ${mr(4)};

  background: ${colors.white};
  display: inline-flex;
  height: 144px;
  width: 200px;
  border: 1px solid ${colors.purple10};
  position: relative;

  ${transition(['transform', 'box-shadow'])};

  &:hover {
    transform: translate(0, -4px);
    border: 1px solid ${colors.primary};
  }
`;

const OuterBox = styled(GatsbyLink)`
  display: inline;
  text-decoration: none;
`;

const ServiceImage = styled.img`
  ${maxWidth(12)};
  ${maxHeight(7)};
  display: block;
  margin: 0;
  position: absolute;
`;

const animateRow = keyframes`
  0% {
    transform: translate(0%, 0);
  }

  100% {
    transform: translate(-50%, 0);
  }
`;

const ServiceRow = styled.div`
  display: inline-block;
  ${mb(4)};
  white-space: nowrap;
  animation: ${animateRow} 90s linear infinite;
`;

const Subtitle = styled(Text)`
  max-width: 460px;
`;

const ServiceTag = styled(Tag)`
  position: absolute;
  top: 8px;
  left: 8px;
`;

const Service = ({ service }) => (
  <OuterBox
    underline={false}
    to="/integrations"
    yolo={console.info('SERVIE', service)}
  >
    <Box flow="column" alignItems="center" justifyContent="center">
      <ServiceImage src={service.logo} />
      {!service.is_available && (
        <ServiceTag
          type={TextTypes.BODY_TINY}
          heavy
          color="#CEF1FF"
          textColor={colors.purple80}
        >
          Coming soon
        </ServiceTag>
      )}
    </Box>
  </OuterBox>
);

const WorksWith = ({ services, title, subtitle }) => (
  <Container>
    <Page width={pageWidth}>
      <Row>
        <Column>
          <Flex flow="column" alignItems="center" justifyContent="center">
            <Tag type={TextTypes.BODY_TINY} heavy>
              Integrations
            </Tag>
            <Text
              align="center"
              mt={3}
              type={TextTypes.HEADING_2}
              color={colors.primary}
            >
              {title}
            </Text>
            <Subtitle
              align="center"
              mt={1}
              mb={5}
              type={TextTypes.BODY}
              color={colors.navy80}
            >
              {subtitle}
            </Subtitle>
          </Flex>
        </Column>
      </Row>
    </Page>
    <div>
      <ServiceRow>
        {[...services, ...services]
          .filter(s => s.show_marketing && s.name)
          .map(service => (
            <Service service={service} />
          ))}
      </ServiceRow>
    </div>
  </Container>
);

export default WorksWith;
