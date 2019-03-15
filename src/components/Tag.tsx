import React from 'react';
import styled from 'styled-components';

import { colors, borderRadius, pv, ph, Text, mr } from 'gather-style';

const Tag = styled(Text)`
  background: ${props => props.color || colors.beige};
  color: ${props => props.textColor || '#A56E26'};
  text-transform: uppercase;
  display: inline;
  ${borderRadius};
  ${pv(0.5)};
  ${ph(1)};
`;

export default Tag;
