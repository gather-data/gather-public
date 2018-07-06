import React, { Component } from 'react';
import styled from 'styled-components';

import { Link, LinkTypes, colors, mb } from 'gather-style';

const CategoryLink = styled(Link)`
  ${mb(1)};
`;

const Categories = ({ categories, updateSelectedCategory, category }) => (
  <div>
    <CategoryLink
      underline={false}
      color={category === null ? colors.purple : colors.purple60}
      type={LinkTypes.TEXT_HEAVY}
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
        type={LinkTypes.TEXT_HEAVY}
        heavy={c === category}
        onClick={
          updateSelectedCategory ? () => updateSelectedCategory(c) : undefined
        }
        to={!updateSelectedCategory && `#`}
      >
        {c}
      </CategoryLink>
    ))}
  </div>
);

export default Categories;
