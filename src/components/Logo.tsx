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
  color: ${colors.green};
  display: flex;
  pointer-events: all;
`;

const StyledImg = styled.img`
  pointer: cursor;
  height: auto;
  width: 17px;
  margin: 0;
`;

const StyledText = styled(Text)``;

const Logo = ({ showName = true }) => {
  return (
    <StyledLink to="/">
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
