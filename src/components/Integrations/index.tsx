import React from 'react';
import styled from 'styled-components';

import { Column, Row, mt } from 'gather-style';

import CategoryGroup from './CategoryGroup';
import Categories from './Categories';
import SearchInput from './SearchInput';

const Container = styled(Row)`
  ${mt(2)};
`;

const CategoriesContainer = styled(Column)``;

const ServicesContainer = styled(Column)`
  flex-direction: column;
`;

const SearchColumn = styled(Column)`
  padding: 0 12px;
`;

const Integrations = ({
  serviceGroups,
  categories,
  query,
  category,
  updateQuery,
  updateSelectedCategory,
}) => (
  <Container fluid>
    <CategoriesContainer fluid divisions={24} xs={24} sm={5} md={4} lg={3}>
      <Categories
        categories={categories}
        updateSelectedCategory={updateSelectedCategory}
        category={category}
      />
    </CategoriesContainer>
    <ServicesContainer
      fluid
      divisions={24}
      xs={24}
      smShift={1}
      sm={18}
      mdShift={1}
      md={19}
      lgShift={1}
      lg={20}
    >
      <Row>
        <SearchColumn>
          <SearchInput query={query} updateQuery={updateQuery} />
        </SearchColumn>
      </Row>
      {serviceGroups.map(([category, servicesForCategory]) => (
        <CategoryGroup
          category={category}
          servicesForCategory={servicesForCategory}
        />
      ))}
    </ServicesContainer>
  </Container>
);

export default Integrations;
