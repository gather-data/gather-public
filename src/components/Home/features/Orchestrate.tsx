import React, { useRef, useState } from 'react';
import { useSpring, animated, useChain, config } from 'react-spring';
import styled from 'styled-components';
import { borderRadius, p, colors, mt, Text, TextTypes } from 'gather-style';
import { Waypoint } from 'react-waypoint';
import reverse from 'lodash/reverse';
import AndroidAlert from 'react-icons/lib/io/android-alert';
import AndroidPeople from 'react-icons/lib/io/android-people';
import { utils } from 'hedron';

import cloud from './cloud.svg';
import slackImage from './slack.svg';

const Container = styled.div`
  --circle-radius: 44px;

  position: relative;
  width: 100%;
  height: 300px;
  display: flex;

  transform: scale(0.9);

  ${utils.breakpoint(
    'md',
    () => `
      transform: scale(1.0);
    `
  )};
`;

const Item = styled.div`
  border-radius: var(--circle-radius);
  height: calc(var(--circle-radius) * 2);
  width: calc(var(--circle-radius) * 2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

const InnerCircle = styled.div`
  --inner-circle-radius: 26px;

  border-radius: var(--inner-circle-radius);
  height: calc(var(--inner-circle-radius) * 2);
  width: calc(var(--inner-circle-radius) * 2);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3ad154;
`;

const InnerIcon = styled.img``;

const ItemText = styled(Text)`
  position: absolute;
  top: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mt(2)};
`;

const Alert = styled(animated(Item))`
  background: #f75353;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
`;

const Schedule = styled(animated(Item))`
  background: #a5f2b2;
  top: 0;
  right: 0;
`;

const Notification = styled(animated(Item))`
  background: #4c1a58;
  bottom: 0;
  right: 0;
`;

const LineSVG = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Line = styled.line`
  stroke-width: 3px;
  stroke: ${colors.border};
  stroke-dasharray: 4 8;
  stroke-dashoffset: 0;

  @keyframes dash {
    to {
      stroke-dashoffset: 500;
    }
  }

  animation: dash 20s infinite;
`;

const LineMask = styled(animated.line)`
  stroke-width: 3px;
  stroke: ${colors.white};
`;

const Cloud = styled.img`
  position: absolute;
  top: -40px;
  bottom: 0;
  left: -40px;
  right: 0;
`;

const Title = styled(Text)`
  color: ${colors.purple};
  background: #d4daff;
  ${p(1)};
  ${borderRadius};
  align-self: flex-start;
`;

interface Props {
  isVisible: boolean;
}

interface Coord {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const getCoordsBetweenElements = (
  first: HTMLDivElement,
  second: HTMLDivElement
): Coord => {
  const x1 = second.offsetLeft + second.offsetWidth / 2;
  const y1 = second.offsetTop + second.offsetHeight / 2;
  const x2 = first.offsetLeft + first.offsetWidth / 2;
  const y2 = first.offsetTop;

  return { x1, y1, x2, y2 };
};

const Orchestrate: React.SFC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const itemProps = {
    to: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'scale(1)' : 'scale(0.8)',
    },
    from: { opacity: 0, transform: 'scale(0.8)' },
    config: config.wobbly,
  };

  // Alert animation
  const alertRef = useRef();
  const alertProps = useSpring({
    ref: alertRef,
    ...itemProps,
    to: {
      ...itemProps.to,
      transform: isVisible
        ? 'scale(1) translate(0, -50%)'
        : 'scale(0.8) translate(0, -50%)',
    },
    from: { ...itemProps.from, transform: 'scale(0.8) translate(0, -50%)' },
  });

  // Schedule animation
  const scheduleRef = useRef();
  const scheduleProps = useSpring({
    ref: scheduleRef,
    ...itemProps,
  });

  // Notification animation
  const slackRef = useRef();
  const slackProps = useSpring({
    ref: slackRef,
    ...itemProps,
  });

  // Refs used for line measuring
  const alertElementRef = useRef();
  const scheduleElementRef = useRef();
  const notificationElementRef = useRef();

  // Create line coords
  let line1Coords = null;
  let line2Coords = null;
  if (alertElementRef.current) {
    line1Coords = getCoordsBetweenElements(
      alertElementRef.current,
      scheduleElementRef.current
    );
    line2Coords = getCoordsBetweenElements(
      alertElementRef.current,
      notificationElementRef.current
    );
  }

  // Get line length
  const lineRef = useRef();
  // This is an approx guess
  let lineLength = 330;
  if (lineRef.current) {
    lineLength = lineRef.current.getTotalLength();
  }

  // Use lineLength to animate lines growing
  const line1Ref = useRef();
  const line1Props = useSpring({
    to: { strokeDashoffset: isVisible ? lineLength : 0 },
    from: { strokeDashoffset: 0 },
    ref: line1Ref,
  });

  const line2Ref = useRef();
  const line2Props = useSpring({
    to: { strokeDashoffset: isVisible ? lineLength : 0 },
    from: { strokeDashoffset: 0 },
    ref: line2Ref,
  });

  // Order animation happens
  const order = [alertRef, line1Ref, scheduleRef, line2Ref, slackRef];

  useChain(isVisible ? order : reverse(order), [0, 0.3, 0.6, 1.2, 1.5], 1500);

  return (
    <Container>
      <Waypoint
        onEnter={() => setIsVisible(true)}
        onLeave={() => setIsVisible(false)}
        scrollableAncestor={window}
        bottomOffset="40%"
      />
      <Title heavy type={TextTypes.BODY_SMALL}>
        Intervention Workflow
      </Title>
      <LineSVG>
        {line1Coords && (
          <>
            <Line
              x1={line1Coords.x1}
              y1={line1Coords.y1}
              x2={line1Coords.x2}
              y2={line1Coords.y2}
              ref={lineRef}
            />
            <LineMask
              x1={line1Coords.x1}
              y1={line1Coords.y1}
              x2={line1Coords.x2}
              y2={line1Coords.y2}
              ref={line1Ref}
              strokeDashoffset={line1Props.strokeDashoffset}
              strokeDasharray={lineLength}
            />
          </>
        )}
        {line2Coords && (
          <>
            <Line
              x1={line2Coords.x1}
              y1={line2Coords.y1}
              x2={line2Coords.x2}
              y2={line2Coords.y2}
            />
            <LineMask
              x1={line2Coords.x1}
              y1={line2Coords.y1}
              x2={line2Coords.x2}
              y2={line2Coords.y2}
              ref={line2Ref}
              strokeDashoffset={line2Props.strokeDashoffset}
              strokeDasharray={lineLength}
            />
          </>
        )}
      </LineSVG>
      <Alert style={alertProps} ref={alertElementRef}>
        <AndroidAlert color={colors.white} size={40} />
        <ItemText heavy type={TextTypes.BODY_TINY} color="#f75353">
          Lovelace, Inc dropped below 50% health
        </ItemText>
      </Alert>
      <Schedule style={scheduleProps} ref={scheduleElementRef}>
        <InnerCircle>
          <AndroidPeople size={30} color={colors.white} />
        </InnerCircle>
        <ItemText heavy type={TextTypes.BODY_TINY} color="#3AD154">
          Schedule check-in
        </ItemText>
      </Schedule>
      <Notification style={slackProps} ref={notificationElementRef}>
        <InnerIcon src={slackImage} />
        <ItemText heavy type={TextTypes.BODY_TINY} color="#4c1a58">
          Notify team via Slack
        </ItemText>
      </Notification>
    </Container>
  );
};

export default Orchestrate;
