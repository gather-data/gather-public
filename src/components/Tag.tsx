import React from 'react';
import styled from 'styled-components';

import { colors, borderRadius, pv, ph, Text, mr } from 'gather-style';

const Tag = styled(Text)`
  background: ${props => props.color || colors.beige};
  color: ${colors.white};
  text-transform: uppercase;
  width: fit-content;
  ${borderRadius};
  ${pv(0.5)};
  ${ph(1)};
  ${mr(2)};
`;

export default Tag;
