import React, { Component } from 'react';
import styled from 'styled-components';
import { utils } from 'hedron';

import { Link, LinkTypes, colors, mb } from 'gather-style';

const Container = styled.div`
  padding: 0 12px;
  ${mb(3)};

  ${utils.breakpoint(
    'md',
    () => `
    padding: 0;
    ${mb(0)()};
  `
  )};
`;

const CategoryLink = styled(Link)`
  ${mb(1)};
`;

const Categories = ({ categories, updateSelectedCategory, category }) => (
  <Container>
    <CategoryLink
      underline={false}
      color={category === null ? colors.purple : colors.purple60}
      linkType={LinkTypes.TEXT_HEAVY}
      useReachRouter
      heavy={category === null}
      onClick={
        updateSelectedCategory ? () => updateSelectedCategory(null) : undefined
      }
      to={!updateSelectedCategory && '#'}
    >
      All
    </CategoryLink>
    {categories.map(c => (
      <CategoryLink
        underline={false}
        color={c === category ? colors.purple : colors.purple60}
        linkType={LinkTypes.TEXT_HEAVY}
        useReachRouter
        heavy={c === category}
        onClick={
          updateSelectedCategory ? () => updateSelectedCategory(c) : undefined
        }
        to={!updateSelectedCategory && `#`}
      >
        {c}
      </CategoryLink>
    ))}
  </Container>
);

export default Categories;
