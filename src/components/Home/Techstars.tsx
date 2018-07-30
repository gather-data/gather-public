import React from 'react';
import styled from 'styled-components';
import {
  colors,
  Flex,
  Page,
  Column,
  Row,
  Text,
  TextTypes,
  pageSmallWidth,
} from 'gather-style';
import TechstarsSrc from './techstars.png';

const Container = styled.div`
  background: ${colors.purple5};
`;

const InnerContainer = styled(Flex)``;

const TechstarsImg = styled.img`
  height: auto;
  max-width: 120px;
  margin: 0;
`;

const Techstars = () => (
  <Container>
    <Page width={pageSmallWidth}>
      <Row>
        <Column>
          <InnerContainer
            flow="row"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Text
              mt={0.5}
              mr={2}
              type={TextTypes.BODY_SMALL}
              color={colors.purple60}
            >
              Accelerated by Techstars
            </Text>
            <TechstarsImg src={TechstarsSrc} />
          </InnerContainer>
        </Column>
      </Row>
    </Page>
  </Container>
);

export default Techstars;
