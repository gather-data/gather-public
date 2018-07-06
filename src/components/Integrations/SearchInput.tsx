import React, { Component } from 'react';
import styled from 'styled-components';
import IOSSearch from 'react-icons/lib/io/ios-search';

import {
  mv,
  mh,
  ml,
  height,
  pv,
  ph,
  colors,
  borderRadius,
  border,
} from 'gather-style';

const StyledInput = styled.input`
  border: 0;
  color: ${colors.purple80};
  outline: 0;
  width: 100%;
  font-size: ${16 / 16}rem;
  line-height: 1.5em;
  font-family: rubik, Helvetica, sans-serif;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  ${height(6)};
  ${ml(1)};
`;

const Container = styled.div`
  background: ${colors.white};
  border-bottom: 1px solid ${colors.border};
  ${borderRadius};
  ${ph(2)};
`;

const StyledForm = styled.form`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row;
  align-items: center;
`;

const SearchInput = ({ query, updateQuery }) => (
  <Container>
    <StyledForm onSubmit={event => event.preventDefault()}>
      <IOSSearch color={colors.purple80} size={24} />
      <StyledInput
        placeholder="Search..."
        onChange={event => updateQuery(event.target.value)}
        type="text"
        value={query}
        icon={<IOSSearch color={colors.fadedNavy} size={24} />}
      />
    </StyledForm>
  </Container>
);

export default SearchInput;
