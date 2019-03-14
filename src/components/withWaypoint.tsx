import React from 'react';
import { Waypoint } from 'react-waypoint';

function withWaypoint() {
  function withWaypointHOC(WrappedComponent) {
    class Wrapper extends React.Component {
      state = {
        isVisible: false,
      };

      onEnter = () => {
        this.setState({ isVisible: true });
      };

      onLeave = () => {
        this.setState({ isVisible: false });
      };

      render() {
        const { isVisible } = this.state;

        return (
          <Waypoint
            onEnter={this.onEnter}
            onLeave={this.onLeave}
            scrollableAncestor={window}
            {...this.props}
          >
            <WrappedComponent {...this.props} isVisible={isVisible} />
          </Waypoint>
        );
      }
    }

    return Wrapper;
  }

  return withWaypointHOC;
}

export default withWaypoint;
