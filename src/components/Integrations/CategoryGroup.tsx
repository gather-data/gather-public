import styled from 'styled-components';
import React, { Component } from 'react';

import { p, Text, TextTypes, Row, Column, colors } from 'gather-style';

import ServiceDetail from './ServiceDetail';

const GroupContainer = styled(Row)``;

const StyledColumn = styled(Column)`
  ${p(1.5)};
`;

const CategoryGroup = ({ category, servicesForCategory }) => (
  <div>
    <StyledColumn>
      <Text color={colors.navy} mt={2} type={TextTypes.BODY}>
        {category}
      </Text>
    </StyledColumn>
    <GroupContainer>
      {servicesForCategory.map(service => (
        <StyledColumn
          fluid
          divisions={24}
          xs={12}
          sm={12}
          md={6}
          key={service.id}
        >
          <ServiceDetail key={service.id} service={service} />
        </StyledColumn>
      ))}
    </GroupContainer>
  </div>
);

export default CategoryGroup;
