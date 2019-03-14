import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import gather from '../assets/images/gather.png';
import {
  Flex,
  Link,
  Text,
  TextTypes,
  configureGlobal,
  ph,
  pv,
  colors,
} from 'gather-style';

const StyledLink = styled(Link)`
  align-items: flex-start;
  display: flex;
  pointer-events: all;
  &:hover {
    text-decoration: none;
  }
`;

const StyledImg = styled.img`
  pointer: cursor;
  height: auto;
  width: 17px;
  margin: 0;
`;

const StyledText = styled(Text)`
  font-family: cornerstone, sans-serif;
  font-weight: normal;
  color: ${colors.navy};
`;

const Logo = ({ showName = true, className }) => {
  return (
    <StyledLink to="/" className={className} useReachRouter>
      <StyledImg src={gather} />
      {showName && (
        <StyledText ml={2} color={colors.navy} type={TextTypes.BODY} heavy>
          GATHER
        </StyledText>
      )}
    </StyledLink>
  );
};

export default Logo;
