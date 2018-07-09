import React from 'react';
import styled from 'styled-components';

import styles, {
  p,
  pv,
  ph,
  mb,
  maxWidth,
  maxHeight,
  transition,
  Text,
  TextTypes,
  colors,
  borderRadius,
  border,
} from 'gather-style';

const Container = styled.div`
  background: ${colors.white};
  position: relative;
  padding: 50% 0;

  ${border};
  ${borderRadius};
`;

const Top = styled.div`
  ${p(2)};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Bottom = styled.div`
  ${ph(2)};
  ${pv(1)};

  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Inner = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-flow: column;
  width: 100%;
  justify-content: center;
`;

const Logo = styled.img`
  margin: 0;
  ${maxWidth(16)};
  ${maxHeight(7)};
`;

const StatusLabel = styled(Text)`
  color: ${colors.white};
  background: ${colors.navy};
  position: absolute;
  top: 0;
  right: 0;
  ${ph(1)};
  ${pv(0.5)};
  border-radius: 0 0 0 4px;
`;

const ServiceDetail = ({ service }) => (
  <Container>
    <Inner>
      <Top>
        <Logo src={service.logo} />
      </Top>
      <Bottom>
        {!service.is_available && (
          <StatusLabel color={colors.white} type={TextTypes.BODY_TINY} heavy>
            COMING SOON
          </StatusLabel>
        )}
        <Text type={TextTypes.BODY} heavy>
          {service.name}
        </Text>
        <Text type={TextTypes.BODY_SMALL}>{service.category}</Text>
      </Bottom>
    </Inner>
  </Container>
);

export default ServiceDetail;
